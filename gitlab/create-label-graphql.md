# Create scoped project labels via GraphQL

Since we are making changes, this will require a GraphQL mutation. You can follow along at [gitlab.com/-/graphql-explorer](https://gitlab.com/-/graphql-explorer).

```
mutation {
  labelCreate(
    input: {projectPath: "brie/dev", title: "🌈::💜", description: "Hello, world!", color: "#FFC0CB"}
  ) {
    label {
      id
      title
      description
      createdAt
    }
    clientMutationId
    errors
  }
}
```

The stuff inside the `label { ... }` will retrieve information about the label once it has been created. When successful, the feedback looks like this:

```
{
  "data": {
    "labelCreate": {
      "label": {
        "id": "gid://gitlab/ProjectLabel/00000000",
        "title": "🌈::💜💜",
        "description": "Hello, world!",
        "createdAt": "2023-03-13T02:32:52Z"
      },
      "clientMutationId": null,
      "errors": []
    }
  }
}
```
