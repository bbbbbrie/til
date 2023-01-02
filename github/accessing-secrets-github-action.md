# Accessing a secret in a GitHub Action

I'm setting up [git scraping](https://simonwillison.net/2020/Oct/9/git-scraping/) to keep track of how many songs I have scrobbed on `last.fm`. I forked [this project](https://github.com/simonw/ca-fires-history) and started modifying `.github/workflows/scrape.yml` to meet my needs. The `last.fm` [docs](https://www.last.fm/api/show/user.getInfo) for `user.getInfo`  say that `api_key` is **Required**. How can I store my API key as a secret and access it in `scrape.yml`? The docs have a [section on accessing the secret in bash](https://docs.github.com/en/actions/security-guides/encrypted-secrets#example-using-bash). In the end, the line that uses the secret looks like this:

```
 curl --request GET  --url \
"https://ws.audioscrobbler.com/2.0?method=user.getinfo \
&user=bbbbbbbbrie&format=json \
&api_key=${{ secrets.LASTFM_API_KEY }}" \
| jq . > incidents.json
```

This assumes that the [secret has been added](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-environment). 
