import { Express, Request, Response } from 'express'
import { TestController } from '../endpoints/_index'
import { AppUser, UserRole } from '../sqlz/models/_index'
import { USER_ROLES } from '../enums/userRoles'

export function routes(app: Express) {
    app.get('/api/test/model', (req: Request, res: Response) => {

        AppUser.findByPk('a78f1e9c-2f54-4e2f-89c4-ac9243ac2d34', {
            attributes: ['email', 'username', 'firstName', 'lastName', 'userRoleName']
        })
            .then((appUser: AppUser) => {
                appUser.getUserRole()
                    .then((appUser: UserRole) => {
                        return res.status(200).send({
                            message: appUser
                        })
                    })
            })
            .catch(error => {
                console.log('error:', error)
                return res.status(500).send({
                    message: 'Error'
                })
            })

        // const newUser = AppUser.create({
        //     email: 'string',
        //     username: 'string',
        //     firstName: 'string',
        //     lastName: 'string',
        //     pwd: 'string',
        //     userRoleName: USER_ROLES.ADMIN
        // }).then((appUser: AppUser)=>{
        //     console.log('Created new user:', appUser)
        //     return res.status(200).send({
        //         message: 'testDone'
        //     })
        // }).catch(error => {
        //     console.log('error:', error)
        //     return res.status(500).send({
        //         message: 'Error'
        //     })
        // })

    })
    app.get('/api/test', (req: Request, res: Response) => res.status(200).send({
        message: 'test'
    }))

}
