# 1. Generate CA's private key and self-signed certificate
openssl req \
    -newkey rsa:2048 \
    -x509 \
    -nodes \
    -keyout ssl.local.key \
    -new \
    -out ssl.local.crt \
    -subj /CN=\*.ssl.local \
    -reqexts SAN \
    -extensions SAN \
    -config <(cat /System/Library/OpenSSL/openssl.cnf \
        <(printf '[SAN]\nsubjectAltName=DNS:\*.ssl.local')) \
    -sha256 \
    -days 3650

# 2. Add this to Mac Keychain
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ssl.local.crt
