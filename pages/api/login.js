// Login API
import excuteQuery from "../../config/db.js";

// import Json Web Token
var jwt = require('jsonwebtoken');

export default async function handler(req, res) {
    let sql, req_data, msg;
    if (req.method === "POST") {
        //  `usrMail`, `usrPassword`, `usrRole`
        req_data = [{
            usrMail : req.body.email,
            usrPassword : req.body.password,
            userCoin : req.body.usrCoin,
        }];

        msg = await postLogin(req_data, res);

        res.status(200).json(msg);

        // res.status(200).json({method : "POST", message : msg })
        
    } else {
        res.status(200).json({message : "METHOD Not Allowed"})
    }
}

async function postLogin(data, res) {
    let sql, result, token;

    sql = "SELECT * FROM users WHERE usrMail = ? AND usrPassword = ?";
    result = await excuteQuery({ query: sql, values: [data[0].usrMail, data[0].usrPassword] });

    if (result.length > 0) {

        // Generate token expire in 20 seconds
        token = jwt.sign({ id: result[0].usrMail }, 'secretKey', { expiresIn: '1D' });
        return {
            success : true,
            message : "Login Success",
            token : token,
            usrCoin : result[0].userCoin
        };
    } else {
        data = {
            usrMail : data[0].usrMail,
            usrPassword : data[0].usrPassword,
            userCoin : data[0].userCoin,
            usrRole : 2
        }
        sql = "INSERT INTO users SET ?";

        result = await excuteQuery({ query: sql, values: data });

        if ( result.affectedRows > 0 ) {

            token = jwt.sign({ id: data[0].usrMail }, 'secretKey', { expiresIn: '1D' });
            return {
                success : true,
                message : "Login Success",
                token :  token,
                usrCoin : data.userCoin
            };
        }
    }
}