pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from Gitea
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                // Run the tests
                sh 'ng test --watch=false --browsers=FChromeHeadless'
            }
        }
        
        stage('Build') {
            steps {
                // Build the Angular project
                sh 'ng build --configuration production'
            }
        }
        
        stage('Package') {
            steps {
                // Create a zip file of the dist folder
                sh '''
                    cd dist
                    zip -r angular-docker.zip angular-docker/
                    cd ..
                '''
            }
        }
        
        stage('Upload Artifact to Nexus') {
            steps {
                // Upload the artifact to Nexus
                withCredentials([usernamePassword(credentialsId: 'nexus-credentials', usernameVariable: 'NEXUS_USER', passwordVariable: 'NEXUS_PASSWORD')]) {
                    sh '''
                        NEXUS_URL="http://nexus:8081/repository/angular-docker"
                        ARTIFACT_PATH="dist/angular-docker.zip"
                        ARTIFACT_NAME="angular-docker.zip"

                        curl -u $NEXUS_USER:$NEXUS_PASSWORD --upload-file $ARTIFACT_PATH $NEXUS_URL/$ARTIFACT_NAME
                    '''
                }
            }
        }
    }
}
