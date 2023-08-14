import { variables } from './variables'

export const firebaseAdminSdk = {
    type: variables.firebaseType,
    project_id: variables.firebaseProjectId,
    private_key_id: variables.firebasePrivateKeyId,
    private_key: variables.firebasePrivateKey,
    client_email: variables.firebaseClientEmail,
    client_id: variables.firebaseClientId,
    auth_uri: variables.firebaseAuthUri,
    token_uri: variables.firebaseTokenUri,
    auth_provider_x509_cert_url: variables.firebaseAuthProvider,
    client_x509_cert_url: variables.firebaseClientCert,
    universe_domain: variables.firebaseUniverseDomain
}
