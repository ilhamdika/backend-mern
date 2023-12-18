const jwt = require('jsonwebtoken');

function authenticatedToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null){
        return res.sendStatus(401);
    }

    jwt.verify(token, 'secret_key', (err, user) => {
        if(err){
            return res.sendStatus(403);
        }

        req.user = user;
        next();
    });
}

function generateAccessToken(email){
    return jwt.sign({data: email}, 'secret_key', {expiresIn: '1h'});
}

module.exports = {
    authenticatedToken,
    generateAccessToken
}
