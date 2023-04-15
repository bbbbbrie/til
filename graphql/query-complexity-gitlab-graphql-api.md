# Observe query complexity with GitLab's GraphQL API

We can use [the `queryComplexity` query](https://docs.gitlab.com/ee/api/graphql/reference/#queryquerycomplexity) to get some information about the complexity of the query that is being executed. You would add this to your query to include the informaiton about the complexity:

```
queryComplexity {
    limit
    score
  }
```

The `queryComplexity` query itself is not free.  

## 📚 READmore

  - GitLab docs: [Max query complexity](https://docs.gitlab.com/ee/api/graphql/index.html#max-query-complexity)
