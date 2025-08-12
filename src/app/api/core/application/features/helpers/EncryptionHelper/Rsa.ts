import NodeRSA from 'encrypt-rsa';
import { rsaModulusLength, rsaPrivateKey } from '../EnvironmentHelper';

const nodeRSA = new NodeRSA(undefined, rsaPrivateKey, Number(rsaModulusLength));

export const rsaEncrypt = (data: string): string => {
  return nodeRSA.encrypt({text: data, privateKey: rsaPrivateKey});
};

export const rsaDecrypt = (encryptedData: string): string => {
  return nodeRSA.decrypt({text: encryptedData, publicKey: rsaPrivateKey});
};