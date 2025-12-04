pipeline {
    agent any

    tools {
        nodejs 'Node20' // Este nombre debe coincidir con lo que configuraste en Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                // Esta línea indica que use el repositorio que configuraste en la UI de Jenkins
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Build terminado con éxito!'
        }
        failure {
            echo 'Error en el build'
        }
    }
}
