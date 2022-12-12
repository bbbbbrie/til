# Auth0 Code Samples: SAML Service Provider on laptop in 10 minutes

The [code samples](https://developer.auth0.com/resources/code-samples) provided by Auth0 (and the accompanying documentation) are excellent! I was able to spin up an app to act as an SP (Service Provider) on my laptop. Users in the generous Auth0 tier are able to log in. 

The tutorial I followed is:

  - [Hello World Full-Stack Security: React/TypeScript + Flask/Python](https://developer.auth0.com/resources/code-samples/full-stack/hello-world/basic-role-based-access-control/spa/react-typescript-with-react-router-6/flask-python) 

The sample repo spins up an SPA (Single Page Application) and are available here:

  - [Backend](https://github.com/auth0-developer-hub/api_flask_python_hello-world.git) - Flask/Python
  - [Frontend](https://github.com/auth0-developer-hub/spa_react_typescript_hello-world_react-router-6.git) - React/Typescript

## SAML

In this scenario:

  - IdP - Identity Provider --> Auth0 plays this role
  - SP - Service Provider --> The full-stack app we deploy plays this role. 

Our app will generate **SAML Requests**. The **SAML Response** will come from Auth0 and will contain the **assertion** of the user. 

**TIL** SLO stands for **S**ingle **L**og**o**ut. 

## READmore

  - [Planning for SAML](https://developer.okta.com/docs/concepts/saml/#planning-for-saml)
