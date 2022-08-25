import { verify } from "jsonwebtoken";

const decryToken = (token, secretKey) => {
    try {
        return verify(token, secretKey);
    }
    catch (err) {
        return false;
    }
}


module.exports = {
    decryToken
}