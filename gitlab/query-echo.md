# GraphQL hello, world with Query.echo

To follow along, browse to [gitlab.com/-/graphql-explorer](https://gitlab.com/-/graphql-explorer) when you are already logged into GitLab. 

Issue this query:

```
{echo(text:"hi 🌈")}
```

In response, you'll get something like:

```
{
  "data": {
    "echo": "\"brie\" says: hi 🌈"
  }
}
```

This is is a nice GraphQL `hello, world` to make sure things are working properly.


## READmore

Docs: [Query.echo](https://docs.gitlab.com/ee/api/graphql/reference/#queryecho)
