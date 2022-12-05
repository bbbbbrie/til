# Datasette has GraphiQL built in!

How cool is that!



Browse to [localhost:8081/graphwl/<DB NAME>](http://127.0.0.1:8001/graphql/tils) or just [localhost:8081/graphql](http://127.0.0.1:8001/graphql) to get started. 


```
{
  til {
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      path
      slug
      topic
      title
    }
  }
}
```
