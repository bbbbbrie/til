# Verify your SSH key passphrase

I was working through The New Stack's guide to [signing `git` commits with SSH keys](https://thenewstack.io/how-to-sign-git-commits-with-an-ssh-key/) and I needed to make sure that the passphrase I was using was the right one. I wanted an _elegant_ way to check this and I found:

```
ssh-keygen -y
```

From the `man` page, we see that `ssh-keygen -y` does this:

```
-y      This option will read a private OpenSSH format file and print an OpenSSH public key to stdout.
```

If you supply an incorrect passphrase, you'll see something like this:

```
# ssh-keygen -f til-brie-dev -y
Enter passphrase:
Load key "til-brie-dev": incorrect passphrase supplied to decrypt private key
```

If things go well, you'll see the corresponding public key printed, _probably_ in a a string that starts `ssh-rsa` and contains the signature blob with an optional comment. 🎉 

If there's no passphrase set, you won't be prompted. 

Cool!
