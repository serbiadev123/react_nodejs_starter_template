import { Request, Response } from 'express'
import { AppUserDao } from '../../dao/_index'
import { DATABASE_SEARCH_RESULT } from '../../enums/databaseSearchResults'

export function create(req: Request, res: Response) {
    AppUserDao.create(req.body)
        .then(appuser => res.status(201).send(appuser))
        .catch(error => res.boom.badRequest(error))
}

export function login(req: Request, res: Response) {
    AppUserDao.login(req.body)
        .then(appuser => res.status(200).send(appuser))
        .catch(error => {
            if (error === DATABASE_SEARCH_RESULT.NOT_FOUND) {
                return res.boom.notFound()
            } else {
                return res.boom.badRequest(error)
            }
        })
}
