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

Assemble `runner-chart-values.yaml`. See the [docs](https://docs.gitlab.com/runner/install/kubernetes.html#configuring-gitlab-runner-using-the-helm-chart). I am going to use the [notes here](https://docs.gitlab.com/runner/install/kubernetes-agent.html) to generate the Runner manifest. I ran:

```
helm template --namespace runner-bbbbbrie  gitlab-runner -f runner-chart-values.yaml gitlab/gitlab-runner > runner-manifest.yaml
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


 
