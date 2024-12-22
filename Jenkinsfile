pipeline {
    agent any
    tools {
        nodejs 'mynode'
        dockerTool 'mydocker'
    }
    stages {
        stage("Checkout the Code") {
            steps {
                checkout scm
            }
        }
        stage("Install Dependencies") {
            steps {
                sh 'npm install'
            }
        }
        stage("Build Docker Image") {
            steps {
                sh 'pwd'
                sh 'whoami'
                sh 'docker --version'
                sh 'docker build -t test-nodeapp:1.0 .'
            }
        }
        stage("Docker Push")
        {
            steps {
               
                        sh "docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD"
                        sh "docker tag test-nodeapp:1.0 ashish1322/test-nodeapp:1.0"
                        sh "docker push ashish1322/test-nodeapp:1.0"
                        sh "docker logout"
            
            }
        }
    }
}
