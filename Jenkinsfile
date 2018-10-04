#!groovy

node('EJ2Component') {
    try {
        deleteDir()

        stage('Import') {
            git url: 'https://gitlab.syncfusion.com/essential-studio/ej2-groovy-scripts.git', branch: 'master', credentialsId: env.JENKINS_CREDENTIAL_ID
            shared = load 'src/shared.groovy'
        }

        stage('Checkout') {
            checkout scm
            shared.getProjectDetails()
            shared.gitlabCommitStatus('running')
        }
     
        stage('Install') {
            shared.runShell('npm install')
        }
          stage('Build') {
            shared.runShell('npm run build')
        }
        
        shared.gitlabCommitStatus('success')
        deleteDir()
    }
    catch(Exception e) {
        shared.throwError(e)
    }
}