pipeline {
  agent any

  tools {
    nodejs 'Node20'      // <-- ESTE NOMBRE DEBE COINCIDIR CON LO QUE CONFIGURES EN JENKINS
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Archive dist') {
      steps {
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }
  }

  post {
    success { echo "🎉 Build completado y artefactos archivados" }
    failure { echo "❌ El build falló" }
  }
}
