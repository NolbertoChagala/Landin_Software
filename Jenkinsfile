pipeline {
    agent any

    tools {
        nodejs "Node20" // Debe coincidir con el Node que configuraste en Jenkins
    }

    environment {
        NODE_ENV = "production"
        // API Key de Render, almacenada como Credential en Jenkins
        RENDER_API_KEY = credentials('RENDER_API_KEY')
        // Reemplaza con tu Service ID de Render
        RENDER_SERVICE_ID = "srv-d4opvb95pdvs73cuv8mg"
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

        stage('Deploy to Render') {
            steps {
                echo 'Desplegando a Render... 🌐'
                sh '''
                curl -X POST "https://api.render.com/deploy/srv-${RENDER_SERVICE_ID}" \
                -H "Authorization: Bearer ${RENDER_API_KEY}" \
                -H "Accept: application/json"
                '''
            }
        }
    }

    post {
        success {
            echo 'Build y Deploy completados correctamente 🎉'
        }
        failure {
            echo 'Hubo un error en el build o deploy ❌'
        }
    }
}
