node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    
 stage('Production') {
      withKubeConfig([credentialsId: 'jenkins-deployer-credentials', serverUrl: 'https://192.168.99.100:8443', 
                     contextName: 'minikube', 
                      caCertificate: '-----BEGIN CERTIFICATE-----
MIIC5zCCAc+gAwIBAgIBATANBgkqhkiG9w0BAQsFADAVMRMwEQYDVQQDEwptaW5p
a3ViZUNBMB4XDTE4MTIwNjE2NDMwNVoXDTI4MTIwNDE2NDMwNVowFTETMBEGA1UE
AxMKbWluaWt1YmVDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOSI
BrYc1H85JpQfQMpe9qiGm2rJF5fhrdU6NyUMQwTaMqcW/zKg8hI2bS8z0THGK/6q
Xga/Bh8Kl6Uz6vSnXkDMA8nnds/bmXcnbHu1t6xgFsq0VIrixq7o4Izpcc449rl+
/d7zwKtBQC7utG+TME6ryJxwotSmBysCG2DnH4rcyby/iNGeQviC61udYSHnRPFx
sajrLF8RsvbhfSk/cYhxuRE6tz553CidKrWRU0qrhYZeznOBwqIYizslFkswCALG
KgzTTt9Z9QY3spNKPce/Hth03rXgg3DXzwTSB9bNgZupkTuUYNEtyJboUXE1vGmq
5muyxcMfsleJWh0afv0CAwEAAaNCMEAwDgYDVR0PAQH/BAQDAgKkMB0GA1UdJQQW
MBQGCCsGAQUFBwMCBggrBgEFBQcDATAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3
DQEBCwUAA4IBAQBs6FSnfQT4Dcwi0v6Ltn/kdxt5G1MfehIEh2YjSj1pzWfu92uH
hdqIdGPG1GqCDBLVelDap2zNFC01i8IVUNTlw1ReE344AY/vqSQyP5pqiFVxZkV0
zUzv8fwj/ViIaCmjhw7IuBbTrX4aGYYDM3ekRG4IMgeWs9bMZSYYRO9zA7WgmR16
NSnkf2PuYG+isu7WXGgRONtNVTX2GWo5B1Csdw+y7qOwtZw0MWI4wNgbCRKT9J6s
cC6sGGFhnvOYhzWr7aTrHgTwepvNJuirMBU+j+W4YRpq9ERjXwu592YWWdXnekqi
tsb27G+le2yivoSgJs3VZgwFTU393/XZ3bqY
-----END CERTIFICATE-----']) {
      
       sh 'kubectl get po'


      
}
 }}
