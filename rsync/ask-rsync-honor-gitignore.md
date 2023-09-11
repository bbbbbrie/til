# Ask rsync to respect .gitignore

It is possible to ask `rsync` to respect `.gitignore` when transferring data with the `--filter` switch.   


```
--filter=':- .gitignore'
```

This approach would work for `.dockerignore` or `robots.txt` or well, any file that lists paths one-per-line.

## 📚 READmore

```
man 1 rsync
```

- [rsync man page](https://linux.die.net/man/1/rsync) 
