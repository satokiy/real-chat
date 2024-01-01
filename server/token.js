import crypto from "crypto";

export function createToken(id) {
  const str = "token-" + id;
  return (crypto.createHash("sha1").update(str).digest("hex"));
}
