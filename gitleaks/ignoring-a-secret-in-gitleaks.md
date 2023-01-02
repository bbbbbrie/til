# Tell gitleaks to ignore a secret

Imagine you have a file with a line like this:

```
-----BEGIN OPENSSH PRIVATE KEY-----
```

When you run `gitleaks`, a [secret detection CLI](https://github.com/zricethezav/gitleaks), it will kindly let you know about the SSH private key it thinks it detected for you! 

OK, so, imagine that line is just an example because you are writing a blog post about setting up SSH  public key authentication. Add a comment containing the string `gitleaks:allow` to the offending line of code. 


``` 

#gitleaks:allow
```
