Steps to setup locally:

1. Install Docker and K8s;
2. Install Skaffold (https://skaffold.dev/);
3. Add Secret to current k8s context - kubectl create secret generic jwt-secret --from-literal=JWT_KEY='abcd';
4. Add default Ingress-nginx settings to k8s context - https://kubernetes.github.io/ingress-nginx/deploy/;
5. Add alias from file 'ingress-srv.yaml'(it can be found near 'host') to /etc/host file  from port 127.0.0.1;
6. Run `skaffold dev`;