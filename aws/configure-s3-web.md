# Configure an S3 bucket for public Internet consumption

This [setting permissions for website access](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteAccessPermissionsReqd.html) doc is the best. 

When configuring the `s3` client on macOS, I found this useful for getting the credentials from `new_user_credentials.csv`:


The CSV has these headers:

```
User name,Password,Access key ID,Secret access key,Console login link
```

That means we can do this:



### Get the Access key ID



```
cat ~/Downloads/new_user_credentials.csv | grep action | cut -d"," -f3 | pbcopy
```


### Get the secret access key


```
cat ~/Downloads/new_user_credentials.csv | grep action | cut -d"," -f4 | pbcopy
```
