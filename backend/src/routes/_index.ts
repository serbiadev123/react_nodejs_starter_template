import * as winston from 'winston'
import { Router, Express, Request, Response } from 'express'
import * as AppUserRoutes from './appusers'
import * as TestRoutes from './test'

export function initRoutes(app: Express) {
    winston.log('info', '--> Initialisations des routes')

    app.get('/api', (req: Request, res: Response) => res.status(200).send({
        message: 'server is running!'
    }))

    AppUserRoutes.routes(app)
    TestRoutes.routes(app)

    app.all('*', (req: Request, res: Response) => res.boom.notFound())
}
