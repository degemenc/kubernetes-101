# Introduction to Kubernetes

This project is my attempt at creating a tutorial for all those who get lost learning Kubernetes. Unfortunately I'm too lazy to create a Medium article from it, but I will comment on all commits and you can follow the improvements. In fact, this is the way I would suggest. Don't even look at the final code, instead start from commit 1 all the way up to the latest commit and experience how to build a Kubernetes project from ground up. Please consider that while creating this project I was an absolute Kubernetes newbie. So if you know better, feel free to comment on commits and open PRs. However, I will try to keep the commit history as simple as possible for the newcomers.

This project gets you from zero to hero in Kubernetes! Well, sort of... In this project you will:
 - Create a NodeJS app.
 - Dockerize and publish it.
 - Set up a Kubernetes deployment for your app and scale it up/down.
 - Expose your deployment publicly (still in localhost but in Kubernetes terms at least you are going outside of the cluster) - with a load balancer service ;)
 - Create another NodeJS app that uses MySQL database and provide a service for your main app (kind of like a microservice).
    - Create ClusterIP type services for your apps and communicate inside your cluster between pods.

This is only kubernetes-101. I'm thinking of doing the same thing for a possible kuberenetes-102 project built upon this one. It would cover ConfigMaps, Secrets, Ingress, StatefulSets using real-world services for a (truly) publicly exposed NodeJS app!

## Pre-Requisites
- You should have at least some idea about what Docker **containers** and Kubernetes **clusters**, **nodes**, **pods** are. I highly suggest doing the [Official "Learn Kubernetes Basics" Tutorial](https://kubernetes.io/docs/tutorials/kubernetes-basics/) to get familiar with these terms. It takes **max. 20-30 minutes** and they made it incredibly easy (REALLY INCREDIBLY EASY) to follow.
- [Install Docker](https://docs.docker.com/get-docker/) and set up a Kubernetes cluster with [minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/).

## References / Where I Learned From
The following references are the official sources listed from the high-level (easy to understand) to the low-level (hard to understand):
- [Official "Learn Kubernetes Basics" Tutorial](https://kubernetes.io/docs/tutorials/kubernetes-basics/) - Do this from start to end.
- [Kubernetes Documentation](https://kubernetes.io/docs/home/) - This is a little long. I haven't read all the titles yet.
- [Kubernetes API Reference](https://kubernetes.io/docs/home/) - Your good old API reference. Long stuff. I was so upset that many of the tutorials I found on the internet did not really go through **every single line** of a yaml configuration file. This API reference was more than enough, and I kept it open in a tab all the time.

The following references are the unofficial ones:
- [Persistent Volumes on Kubernetes for beginners](https://www.youtube.com/watch?v=ZxC6FwEc9WQ)

## Some commands - a little cheat sheet that you can use during/after the tutorial

 - **Docker build:** ```docker build -t degemenc/kubegreeter .```

 - **Docker run:** ```docker run -p 49160:8080 -d degemenc/kubegreeter```

 - **Curl your deployment:** run ```kubectl proxy``` on another terminal & run ```curl http://localhost:8001/api/v1/namespaces/default/pods/$POD_NAME/proxy/``` on main terminal
 
- **Update image:** ```kubectl set image deployments/kubegreeter-deployment kubegreeter=degemenc/kubegreeter:latest```

- **Set up LoadBalancer:** run ```minikube tunnel``` on another terminal to activate local LoadBalancer. It somewhat imitates an online service's (Amazon, Azure etc.) load balancing algorithms.

- **Open a bash console in pod:** ```kubectl exec -ti $POD_NAME bash```

- **Start mysql in bash:** ```mysql -u root -p```

- **Scale up/down a deployment:** ```kubectl scale deployments/kubegreeter-deployment --replicas=5```
