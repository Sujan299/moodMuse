import jwt from 'jsonwebtoken'

export const getToken = (user)=>{
    const payload = {
        id: user.id,
        email: user.email
    }
    const token = jwt.sign(payload, process.env.JWT_secret_key, {expiresIn: "1h"});
    return token;
}