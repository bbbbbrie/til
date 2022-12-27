# Get GraphQL Snippets via GitLab GraphQL API

Here is how to get started retrieving the public snippets for a particular user:

```graphql
query {
  user(username: "brie") {
    snippets(visibility: public) {
      edges {
        node {
          id
          title
          rawUrl
        }
      }
    }
  }
}

```

The [GraphQL Explorer](https://gitlab.com/-/graphql-explorer) will let you get started with that query today. 🌇 
