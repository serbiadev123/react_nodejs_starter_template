import { Request, Response } from 'express'
import { AppUserDao } from '../../dao/_index'
import { DATABASE_SEARCH_RESULT } from '../../enums/databaseSearchResults'
import { signToken } from '../middleware/auth'
export function create(req: Request, res: Response) {
    AppUserDao.create(req.body)
        .then(appuser => res.status(201).send(appuser))
        .catch(error => res.boom.badRequest(error))
}

export function login(req: Request, res: Response) {
    AppUserDao.login(req.body)
        .then(appuser => {
            let token = signToken(appuser)

            res.status(200).send({
                email: appuser.email,
                username: appuser.username,
                name: appuser.username,
                userRole: appuser.UserRole.name,
                token
            })
        })
        .catch(error => {
            switch (error) {
                // we don't want to tell the user if the password or username is invalid to protect user information
                case DATABASE_SEARCH_RESULT.NOT_FOUND:
                    return res.boom.notFound('Invalid username or password')
                case DATABASE_SEARCH_RESULT.INVALID_PASSWORD:
                    return res.boom.notFound('Invalid username or password')
                default:
                    return res.boom.badImplementation('Server Error. Try again later, or contact the site owners.')
            }
        })
}
