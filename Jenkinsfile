pipeline {
    agent any

    tools {
        nodejs "Node20"
    }

    environment {
        NODE_ENV = "production"
    }

    stages {

        stage('Checkout') {
            steps {
                git url: 'https://github.com/NolbertoChagala/Landin_Software.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install --include=dev'
            }
        }

        stage('Build') {
            steps {
                sh 'npx vite build'
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: false
            }
        }

        stage('Deploy (Opcional)') {
            steps {
                echo 'Deploy opcional aquí'
            }
        }
    }

    post {
        success {
            echo 'Build terminado correctamente 🎉'
        }
        failure {
            echo 'Hubo un error en el build ❌'
        }
    }
}
