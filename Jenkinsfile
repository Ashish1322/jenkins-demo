pipeline {
  agent any
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
  }
}
