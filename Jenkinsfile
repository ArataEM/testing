pipeline {
    agent {
        docker {
				image 'node:13-alpine'
				args '-p 3000:3000'
			}		
    }
	environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'yarn install'
            }
        }
	    stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
    }
}
