# Deploy GitLab Runner to an Okteto Kubernetes Cluster


Can we deploy GitLab Runner with [Okteto](https://www.okteto.com/)? **Yes**.

```
brew install okteto
okteto context use https://cloud.okteto.com
okteto context list
mkdir okteto &&  cd okteto/
helm repo add gitlab https://charts.gitlab.io
brew install helm
helm repo add gitlab https://charts.gitlab.io
helm repo update gitlab
```

Assemble `runner-chart-values.yaml`. I used something like what's shown below and in [this snippet](https://gitlab.com/-/snippets/2470446):

```
gitlabUrl: https://gitlab.com/
runnerRegistrationToken: "TOKEN_GOES_HERE"

# https://gitlab.com/gitlab-org/gitlab-runner/-/issues/3802#note_1137664476
preEntrypointScript: |
  sed -i '/\[runners.cache\]/d' /home/gitlab-runner/.gitlab-runner/config.toml
  sed -i '/\[runners.cache.s3\]/d' /home/gitlab-runner/.gitlab-runner/config.toml
  sed -i '/\[runners.cache.gcs\]/d' /home/gitlab-runner/.gitlab-runner/config.toml
  sed -i '/\[runners.cache.azure\]/d' /home/gitlab-runner/.gitlab-runner/config.toml

runners:
  # runner configuration, where the multi line strings is evaluated as
  # template so you can specify helm values inside of it.
  #
  # tpl: https://helm.sh/docs/howto/charts_tips_and_tricks/#using-the-tpl-function
  # runner configuration: https://docs.gitlab.com/runner/configuration/advanced-configuration.html
  config: |
    concurrent = 6
    log_level = "info"
    log_format = "json"
    sentry_dsn = "https://whatever@whatever.ingest.sentry.io/0123456789"
    listen_address = "localhost:9252"
    [[runners]]
      name = "okteto k8s"
      [runners.kubernetes]
        namespace = "{{.Release.Namespace}}"
        image = "debian:bookworm-slim"
```

See the [docs](https://docs.gitlab.com/runner/install/kubernetes.html#configuring-gitlab-runner-using-the-helm-chart) for more. 


I am going to use the [notes here](https://docs.gitlab.com/runner/install/kubernetes-agent.html) to generate the Runner manifest. I ran:

```
helm template --namespace runner-bbbbbrie  gitlab-runner -f runner-chart-values.yaml gitlab/gitlab-runner > runner-manifest.yaml
```

Check your work:

```
kubectl --dry-run=client apply -f runner-manifest.yaml
kubectl --dry-run=server apply -f runner-manifest.yaml
```

Deploy:

```
kubectl apply -f runner-manifest.yaml
```



I need to specify a namespace. Let's see [how namespaces work in Okteto](https://www.okteto.com/docs/cloud/namespaces/). This can be done in the Web UI or with `okteto namespace create cutecats`.

Let's get set up to use `kubectl` against our `okteto` cluster:

```
okteto context list
okteto kubeconfig
```

With that done `kubectl config view` shows my Okteto cluster: cool!

Let's apply our Runner manifest:

```
kubectl apply -f runner-manifest.yaml
secret/gitlab-runner created
configmap/gitlab-runner created
deployment.apps/gitlab-runner created
```
 
That's promising! Let's check the **Runner** section of the project: done!


Okteto's documentation on [the RBAC rules in place](https://www.okteto.com/docs/cloud/multitenancy/#rbac) is a 🔖 solid bookmark if you'll be using Okteto for testing and development. 



--------

## Creating a namespace

I need to specify a namespace. Read [how namespaces work in Okteto](https://www.okteto.com/docs/cloud/namespaces/).

I created a namespace in the Web UI but you can also use `okteto namespace create cutecats`. 


## An example repo

```
git clone https://github.com/okteto/movies-with-compose
cd movies-with-compose
okteto up
```


 
