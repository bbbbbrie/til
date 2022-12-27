# View Security Scanners enabled in a given project via the GitLab GraphAL API

```graphql
query {
  project(fullPath: "bcarranza/detecting-secrets") {
    
   id
    securityScanners{
      enabled
      pipelineRun
    }
  }
}
```

In response, I get:

```
{
  "data": {
    "project": {
      "id": "gid://gitlab/Project/28746821",
      "securityScanners": {
        "enabled": [
          "SECRET_DETECTION"
        ],
        "pipelineRun": []
      }
    }
  }
}
```

That shows that while **Secret Detection** is enabled, no scanner ran successfully in the latest pipeline. In a project where **Dependency Scanning** ran successfully, we see:

```
{
  "data": {
    "project": {
      "id": "gid://gitlab/Project/40375764",
      "securityScanners": {
        "enabled": [
          "DEPENDENCY_SCANNING"
        ],
        "pipelineRun": [
          "DEPENDENCY_SCANNING"
        ]
      }
    }
  }
}
```
