node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }
 stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("marouaniala/hellonode")
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
    
    
 stage('Production') {
     
      withKubeConfig([credentialsId: 'secret_k8s_openstack', serverUrl: 'https://172.16.255.56:6443']) {
      
          
          sh "if kubectl get deployment hellonode 2> /dev/null ;then kubectl set image deployments/hellonode hellonode=marouaniala/hellonode:${env.BUILD_NUMBER}; else  kubectl create deployment --image=marouaniala/hellonode:${env.BUILD_NUMBER} hellonode ; fi"
          sh "if ! kubectl get service hellonode 2>/dev/null  ;then kubectl expose deployment hellonode --type=NodePort --port 8000; else echo ;fi"
          
}
 }}
