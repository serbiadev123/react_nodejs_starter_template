import { Express } from 'express'
import { AppUserController } from '../endpoints/_index'
import { auth } from '../endpoints/middleware/auth'
import validation from '../endpoints/middleware/validation'
import { CreateUserValidationRules, LoginUserValidationRules } from '../endpoints/appusers/_index'
import { USER_ROLES } from '../enums/userRoles'

export function routes(app: Express) {
    // Express supports middleware chain. Which means you can pass as many functions as you want, and as long
    // as they return next(), the chain will continue. If one chain element fails, you need to return a response,
    // and other chain elements will not get executed
    app.get('/api/appUsers', auth, AppUserController.AppUserGet.list)
    app.post(
        '/api/appUsers',
        auth([USER_ROLES.ADMIN]),
        CreateUserValidationRules(),
        validation,
        AppUserController.AppUserPost.create
    )

    app.post(
        '/api/appUsers/login',
        LoginUserValidationRules(),
        validation,
        AppUserController.AppUserPost.login
    )
}
