pipeline {
    agent any

    // Usa el NodeJS que configuraste en Jenkins
    tools {
        nodejs "Node20" // ⚠️ Debe coincidir exactamente con el nombre que pusiste en Jenkins
    }

    environment {
        NODE_ENV = "production"
    }

    stages {

        stage('Checkout') {
            steps {
                // Clona tu repo desde GitHub
                git url: 'https://github.com/NolbertoChagala/Landin_Software.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Instala dependencias
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Construye la landing con npx para evitar problemas de PATH
                sh 'npx vite build'
            }
        }

        stage('Archive') {
            steps {
                // Guarda los archivos construidos como artefactos de Jenkins
                archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: false
            }
        }

        stage('Deploy (Opcional)') {
            steps {
                // Aquí puedes agregar el comando para copiar dist/ a tu servidor o Render
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
