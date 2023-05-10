# HOWTO Use Vim to open a file right at the line number you specify

Sometimes, you want to open a file  right at the exact line you want to edit.

You can do something like `48G` to go right to line 48 _but_ there's a faster way. You can instead do:

```
vim +48 whatever.txt
```

That will take you right to line **48** of `whatever.txt`. 
