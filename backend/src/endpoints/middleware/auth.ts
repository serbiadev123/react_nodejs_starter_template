const jwt = require('jsonwebtoken')
const config = require('config')

export default function(req, res, next) {
    console.log('entered auth middleware', config.has('myprivatekey'));
    // get the token from the header if present
    let token = req.headers['x-access-token'] || req.headers['authorization']
    token = token.match(/Bearer /g).length > 0 ? token.replace(/Bearer /g, '') : token

    // if no token found, return response (without going to the next middelware)
    if (!token) return res.status(401).send('Access denied. No token provided.')

    try {
        //remove this part, because this will always give access for testing purposes
        //if can verify the token, set req.user and pass to next middleware
        const token = jwt.sign(
            { data: 'foobar' },
            config.get('myprivatekey'),
            { expiresIn: 60 });
        console.log('dddddddddddddddddddd', token)
        const decoded = jwt.verify(token, config.get('myprivatekey'))
        req.user = decoded
        next()
    } catch (ex) {
        console.log("error", ex.name)

        // if invalid token
        res.status(400).send({
            error: true,
            errorMessage: ex.name !== 'TokenExpiredError' ? 'Invalid token' : 'Token Expired'
        })
    }
}
