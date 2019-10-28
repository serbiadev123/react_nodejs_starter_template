import { Express, Request, Response } from 'express'
import { TestController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/test', (req: Request, res: Response) => res.status(200).send({
    message: 'test'
  }))

}
