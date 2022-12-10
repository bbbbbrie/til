# Creating kubectl plugins

TIL that [kubectl plugins](https://kubernetes.io/docs/tasks/extend-kubectl/kubectl-plugins/) are _super_ simple to set up. The [Getting started with kubectl plugins](https://www.padok.fr/en/blog/kubectl-plugins) covers this:

> Any executable file in your PATH that starts with `kubectl-` can be called with the `kubectl` command.

And yeah, it's that simple! I can run `kubectl cat`:

```
# kubectl cat
🐈 Meow brie! 🐈
```

Here's what it took:

```
# ls -ahls /usr/local/bin/kubectl-cat
8 -rwxr-xr-x  1 root  admin    46B Dec  9 20:53 /usr/local/bin/kubectl-cat
```

```
# cat /usr/local/bin/kubectl-cat
#!/bin/bash


echo "🐈 Meow ${USER}! 🐈"
```
