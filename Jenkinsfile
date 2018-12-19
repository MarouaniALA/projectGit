node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    
 stage('Production') {
      withKubeConfig([credentialsId: 'jenkins-deployer-credentials', serverUrl: 'localhost']) {
      
       sh 'kubectl get po'


      
}
 }}
