pipeline {
    agent any

    tools {
        nodejs "Node20"
    }

    environment {
        NODE_ENV = "production"
        DOCKER_IMAGE = "nolbertochagala/landing:latest"  // Cambia a tu repo de Docker Hub
        DOCKER_USERNAME = credentials('DOCKER_HUB_USER')  // Credenciales Jenkins
        DOCKER_PASSWORD = credentials('DOCKER_HUB_PASS')
        RENDER_API_KEY = credentials('RENDER_API_KEY')
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

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Push Docker Image') {
            steps {
                sh """
                echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin
                docker push ${DOCKER_IMAGE}
                """
            }
        }

        stage('Deploy to Render') {
            steps {
                echo 'Desplegando a Render usando la imagen Docker... 🌐'
                sh """
                curl -X POST "https://api.render.com/v1/services/${RENDER_SERVICE_ID}/deploys" \
                -H "Authorization: Bearer ${RENDER_API_KEY}" \
                -H "Content-Type: application/json" \
                -d '{"clearCache": true}'
                """
            }
        }
    }

    post {
        success {
            echo 'Build, Docker y Deploy completados correctamente 🎉'
        }
        failure {
            echo 'Hubo un error en el build, Docker o deploy ❌'
        }
    }
}
