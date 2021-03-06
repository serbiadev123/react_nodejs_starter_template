import * as express from 'express'
import * as winston from 'winston'
import * as boom from 'express-boom'
import * as morgan from 'morgan'
import * as cors from 'cors'
import * as http from 'http'
import { json, urlencoded } from 'body-parser'
import { Express, Response } from 'express'
import * as routes from './routes/_index'

const PORT: number = 3333

/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
export class Server {

    private app: Express
    public readonly server: http.Server

    constructor(portNumber: number = PORT) {
        this.app = express()

        // Express middleware
        this.app.use(cors({
            optionsSuccessStatus: 200
        }))
        this.app.use(urlencoded({
            extended: true
        }))
        this.app.use(json())
        this.app.use(boom())
        this.app.use(morgan('combined'))
        this.server = this.app.listen(portNumber, () => {
            winston.log('info', '--> Server successfully started at port ' + portNumber)
        })
        routes.initRoutes(this.app)
    }

    getApp() {
        return this.app
    }
}
