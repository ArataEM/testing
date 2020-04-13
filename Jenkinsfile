pipeline {
    agent {
        docker {
			image 'node:13-alpine'
			args '-p 3000:3000'
			}		
    }
    stages {
        stage('Test') {
            steps {
                sh 'npm install'
            }
        }
    }
}
