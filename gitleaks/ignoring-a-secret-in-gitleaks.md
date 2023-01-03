# Tell gitleaks to ignore a secret

Imagine you have a file with a line like this:

```
-----BEGIN OPENSSH PRIVATE KEY-----
```

When you run `gitleaks detect`, a [secret detection CLI](https://github.com/zricethezav/gitleaks), it will kindly let you know about the SSH private key it thinks it detected for you! 

OK, so, imagine that line is just an example because you are writing a blog post about setting up SSH  public key authentication. 

# 😿

What should we do?

Add the string `gitleaks:allow` _anywhere_ on a line that you would like `gitleaks` to ignore during scans. If you are using something like CSS that does _not_ use `#` for comments, you would have a line that looks like this:


```
aws_key=butnotreally lol /* gitleaks:allow */
```


### A _quick_ rabbit hole

Wikipedia has [this interesting table](https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(syntax)#Comments) about comments on the [Comparison of programming languages (syntax)](https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(syntax)). 

## At the Source

The [additional configuration](https://github.com/zricethezav/gitleaks#additional-configuration) docs for `gitleaks` contain a [section on using  `gitleaks:allow`](https://github.com/zricethezav/gitleaks#gitleaksallow). 

See [line 38](https://github.com/zricethezav/gitleaks/blob/master/detect/detect.go#L38) of `detect/detect.go` in the `gitleaks` source to read more about how this works. 



