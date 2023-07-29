# Find current git signing key + scope with git config

I switched back to an old laptop and was having trouble with `git commit` complaining about the passphrase I was using. It was the correct passphrase -- for a different key. I spent a little time with `git config` to record a few queries for how to find the current `git` signing key.

You'll want one if you want to [sign commits with your SSH key](https://docs.gitlab.com/ee/user/project/repository/ssh_signed_commits/#configure-git-to-sign-commits-with-your-ssh-key). That's how you get the pretty `Verified` badge on commits [like this one](https://gitlab.com/brie/httpmeow/-/commit/6430ea07d2dfa3da63f760d2d1ee4f848d183807).

```
git config --show-scope --get user.signingkey
```

The `--show-scope` option is a nice bonus as you get to see **where** the signing key has been configured. From the usage notes on `git config`:

```
    --show-scope          show scope of config (worktree, local, global, system, command)
```

This is nice a nice option when you want to understand _where_ a specific config is coming from. To take a look  your `git` config for the directory you are in currently, consider:

```
git config --list --show-scope
````
