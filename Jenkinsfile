node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    
 stage('Production') {
      withKubeConfig([credentialsId: 'localhost', serverUrl: 'localhost']) {
      
       sh 'kubectl create cm nodejs-app --image marouaniala/hellonode  -o=yaml --dry-run > deploy/cm.yaml'

sh 'kubectl apply -f deploy/ '
      
}
 }}
