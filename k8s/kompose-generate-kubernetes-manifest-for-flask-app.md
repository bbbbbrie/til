# Using Kompose to generate Kubernetes manifests for Python Flask apps

  - **Input**: A Flask app that is not Kubernetes-aware
  - **Output**: Kubernetes manifests for deploying the Flask app

This sounds like a place where [kompose](https://kompose.io/) can shine. ☀️

## Prerequisites

I am going to deploy [httpmeow](https://gitlab.com/brie/httpmeow), the Flask app I built for the [HTTP Response Status Cats](https://httpcat.us) that I [wrote about in November](https://brie.dev/httpcats/). First things first: `httpmeow` is not presently Kubernetes-aware. (It doesn't need to be: it's deployed to Google Cloud Run and could _probably_ be a static site.)

```yaml
# docker-compose.yaml
version: '3'

services:
  httpmeow:
    build: '.'
    image: registry.gitlab.com/brie/httpmeow:v0
    ports:
      - '5000:8008'
```

## Let's go!

There are a host of [installation options](https://kompose.io/installation/) for `kompose`. Let's use Docker; we'll need to deviate a bit from what is currently in the docs. This is what worked well for me:


```
git clone https://github.com/kubernetes/kompose.git
cd kompose
docker build -t kompose:v0 .
docker run --rm -it -v $PWD:/opt kompose:v0  sh -c "cd /opt && kompose convert"
```

Once it's ready, go back to the directory where the Flask app is stored and run:

```
docker run --rm -it -v $PWD:/opt kompose:v0  sh -c "cd /opt && kompose convert"
```

The output is promising:

```
INFO Network opt-default is detected at Source, shall be converted to equivalent NetworkPolicy at Destination
INFO Kubernetes file "httpmeow-service.yaml" created
INFO Kubernetes file "httpmeow-deployment.yaml" created
INFO Kubernetes file "opt-default-networkpolicy.yaml" created
```

## ...and beyond!

From here, you can add annotations and other adjustments to the manifests. When they are all ready to go, they can be deployed with `kubectl apply`:

```
kubectl apply -f httpmeow-service.yaml,httpmeow-deployment.yaml
```

Depending on where you are deploying, you might want to skip the network policy.

If all is well, things will be created and you can do `kubectl get deployments` and `kubectl logs deployment/httpmeow`. 