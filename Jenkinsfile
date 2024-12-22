pipeline {
  agent any
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
  }
}
