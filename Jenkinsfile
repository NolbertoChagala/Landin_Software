pipeline {
    agent any

    // Usa el NodeJS que configuraste en Jenkins
    tools {
        nodejs "Node20" // ⚠️ Debe coincidir exactamente con el nombre que pusiste
    }

    environment {
        // Puedes definir variables de entorno si las necesitas
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
                // Construye la landing
                sh 'npm run build'
            }
        }

        stage('Archive') {
            steps {
                // Guarda los archivos construidos como artefactos de Jenkins
                archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
            }
        }

        stage('Deploy (Opcional)') {
            steps {
                // Aquí puedes agregar el comando para copiar dist/ a tu servidor o Render
                echo 'Aquí va el deploy si quieres automatizarlo'
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
