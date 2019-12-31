const jwt = require('jsonwebtoken')
const config = require('config')
const PRIVATE_KEY_NAME = 'myprivatekey'
const EXPIRATION_TIME = 60 * 60
import { USER_ROLES } from '../../enums/userRoles'

/**
 * Check if the current request has a token with appropriate permission
 *
 * @param userRoles - array with USER_ROLES telling us all the roles which have access to this route
 */
export const auth = (userRoles: Array<USER_ROLES>) => {
    return function checkPermission(req, res, next) {
        let token = req.headers['x-access-token'] || req.headers['authorization']

        // if no token found, return response (without going to the next middelware)
        if (!token) return res.status(401).send('Access denied. No token provided.')

        token = token.match(/Bearer /g).length > 0 ? token.replace(/Bearer /g, '') : token
        try {
            const decoded = jwt.verify(token, config.get(PRIVATE_KEY_NAME))
            req.user = decoded.appuser

            if (!userRoles.includes(req.user.UserRole.name)) {
                return res.boom.forbidden('Permission not high enough')
            }

            next()
        } catch (ex) {
            return res.boom.forbidden(ex.name !== 'TokenExpiredError' ? 'Invalid token' : 'Token Expired')
        }
    }
}

/**
 * user which will be saved in the token and assigned to request body on authentication
 *
 * @param appuser - user information
 */
export const signToken = (appuser) => {
    return jwt.sign(
        { appuser },
        config.get(PRIVATE_KEY_NAME),
        { expiresIn: EXPIRATION_TIME }
    )
}
