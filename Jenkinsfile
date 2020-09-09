pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build and push') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
