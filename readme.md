Steps to setup locally:

1. Install Docker and K8s;
2. Install Skaffold (https://skaffold.dev/);
3. Add `jwt-secret` Secret to current k8s context - kubectl create secret generic jwt-secret --from-literal=JWT_KEY='abcd';
4. Add Secret to current k8s context - kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=...;
5. Add default Ingress-nginx settings to k8s context - https://kubernetes.github.io/ingress-nginx/deploy/;
6. Add alias from file 'ingress-srv.yaml'(it can be found near 'host') to /etc/hosts file from port 127.0.0.1;
7. Run `skaffold dev`;
