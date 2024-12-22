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
  }
}
