import { rsaDecrypt } from "./EncryptionHelper/Rsa";

// ++++++++++ RSA +++++++++
export const rsaPublicKey = process.env.RSA_PUBLIC_KEY;
export const rsaPrivateKey = process.env.RSA_PRIVATE_KEY;
export const rsaModulusLength = process.env.RSA_MODULUS_LENGTH;



// ++++++ Mongo DB ++++++++++++
export const mondgoDbUri= process.env.MONGODB_URI;
export const adminKey = process.env.ADMIN_KEY;


export const getMongoDbUri = () => {
    if (!mondgoDbUri) {
        throw new Error("MongoDB URI is not defined in the environment variables.");
    }

    return rsaDecrypt(mondgoDbUri);
}


export const getAdminKey= () => {
    if (!adminKey) {
        throw new Error("Admin key is not defined in the environment variables.");
    }

    return rsaDecrypt(adminKey);
}

