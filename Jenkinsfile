pipeline {
  agent any
  tools {
    nodejs "mynodejs"
  }
  stages {
    stage("Pull the code from git")
    {
      steps {
        checkout scm  
      }
    }
    stage("Build the code")
    {
      steps {
        sh "npm install"
      }
    }
    stage("Build the docker image")
    {
      steps {
        sh "pwd"
        sh "whoami"
        sh "docker build -t my-node:1.0 ."
      }
    }
    stage("Deploy the Image to Docker Repo")
    {
      steps {
        sh "docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD"
        sh "docker tag my-node:1.0 $DOCKERHUB_USERNAME/my-node:1.0"
        sh "docker push $DOCKERHUB_USERNAME/my-node:1.0"
        sh "docker logout"
      }
    }
  }
}
