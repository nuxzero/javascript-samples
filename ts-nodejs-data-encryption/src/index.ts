import * as crypto from "crypto";

/** Generate secret key */
// const genkey = crypto
//   .createHash("sha256")
//   .update(String(secret))
//   .digest("base64")
//   .substr(0, 32);
// console.log("genkey: " + genkey);

console.log("===================== AES-256-CBC ==========================");
function encrypt(data: string): string {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    process.env.SECRET_KEY!,
    iv
  );
  let encrypted = cipher.update(data, "utf8");
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return Buffer.concat([iv, encrypted]).toString("base64");
}

function decrypt(data: string): string {
  const dataBuffer = Buffer.from(data, "base64");
  const iv = dataBuffer.slice(0, 16);
  const encrypted = dataBuffer.slice(16);
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    process.env.SECRET_KEY!,
    iv
  );
  let decrypted = decipher.update(encrypted);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

const encrypted = encrypt("test");
console.log(`Encrypted credentials: ${encrypted}`);
const decrypted = decrypt(encrypted);
console.log(`Decrypted credentials: ${decrypted}`);

console.log("===================== AES-256-GCM ==========================");
// const encryptionKey = crypto.randomBytes(32); // 256-bit key
const encryptionKey = process.env.SECRET_KEY!; // 256-bit key

console.log("encryptionKey: " + encryptionKey);
function encryptCredentials(credentials: string): string {
  const iv = crypto.randomBytes(12); // 96-bit nonce
  const cipher = crypto.createCipheriv("aes-256-gcm", encryptionKey, iv);
  let encrypted = cipher.update(credentials, "utf8");
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return Buffer.concat([iv, encrypted, cipher.getAuthTag()]).toString("base64");
}

function decryptCredentials(encryptedCredentials: string): string {
  const buffer = Buffer.from(encryptedCredentials, "base64");
  const iv = buffer.slice(0, 12);
  const encrypted = buffer.slice(12, -16);
  const tag = buffer.slice(-16);
  const decipher = crypto.createDecipheriv("aes-256-gcm", encryptionKey, iv);
  decipher.setAuthTag(tag);
  let decrypted = decipher.update(encrypted);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

// Example usage
const myCredentials = "my-secret-password";
const encryptedCredentials = encryptCredentials(myCredentials);
console.log("Encrypted credentials:", encryptedCredentials);
const decryptedCredentials = decryptCredentials(encryptedCredentials);
console.log("Decrypted credentials:", decryptedCredentials);
