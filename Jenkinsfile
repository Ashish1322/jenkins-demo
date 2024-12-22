pipeline {
  agent any
  tools {
        nodejs 'mynode'
  }
  stages {
    stage("checkout the code")
    {
      steps {
        checkout scm
      }
    }
    stage("build the code")
    {
      steps {
        sh 'npm install'
      }
    }
    stage("build docker image")
    {
      steps {
        sh 'docker build -t test-nodeapp:1.0 .'
      }
    }
  }
}
