# Specify the time zone to use with the date command

Populate `$TZ` correctly and `date` will tell you the time in a different time zone. 

```
# TZ='UTC' date
Wed May 10 04:00:07 UTC 2023
```

```
# TZ='America/New_York' date
Wed May 10 00:00:16 EDT 2023
```

The output provides some helpful feedback so you can confirm the command you supplied was interpreted properly. 

