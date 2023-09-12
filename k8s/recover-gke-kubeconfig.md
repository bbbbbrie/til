# Recover GKE kubeconfig

I found myself needing to teach `kubectl` how to connect to a particular GKE cluster -- fast. ⚡️ 

Here's the recipe, which assumes `gcloud` is set up properly for the correct Google Cloud account.

🚀 Let's go!

What was the cluster name again?

```
gcloud container clusters list
```

Copy the correct cluster name. Let's use `catsonk8s` for our example. The magic is all in the next command:

```
gcloud container clusters get-credentials catsonk8s  --zone us-east1-c
Fetching cluster endpoint and auth data.
kubeconfig entry generated for catsonk8s.
```
You'll need to adjust the `--zone` value to suit or use `--region`.


🎉 All done! Commands like `kubectl get pods` are all set up to talk to the cluster.

🍀 Good luck with whatever [Kubernetes problem](https://blog.adamchalmers.com/kubernetes-problems/) you are solving.
