node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    
 stage('Production') {
     kubernetesDeploy(
  configs: '.kube/config',
  credentialsType: 'SSH',
  ssh: [
    sshCredentialsId: 'localhost-SSH',
    sshServer: 'localhost'
 ])
      withKubeConfig([credentialsId: 'jenkins-deployer-credentials', serverUrl: 'https://192.168.99.100:8443', 
                     contextName: 'minikube', 
                      caCertificate: '/home/marouani/.minikube/ca.crt']) {
      
       sh 'kubectl get po'


      
}
 }}
