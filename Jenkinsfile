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
                sh 'docker --version'
                sh 'pwd'
                sh 'docker build -t test-nodeapp:1.0 .'
            }
        }
    }
}
