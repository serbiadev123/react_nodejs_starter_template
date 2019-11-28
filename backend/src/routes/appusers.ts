import { Express } from 'express'
import { AppUserController } from '../endpoints/_index'
import auth from '../endpoints/middleware/auth'
import validation from '../endpoints/middleware/validation'
import { CreateUserValidationRules, LoginUserValidationRules } from '../endpoints/appusers/_index'

export function routes(app: Express) {
    app.get('/api/appUsers', auth, AppUserController.AppUserGet.list)
    app.post(
        '/api/appUsers',
        auth,
        CreateUserValidationRules(),
        validation,
        AppUserController.AppUserPost.create
    )

    app.post(
        '/api/appUsers/login',
        LoginUserValidationRules(),
        auth,
        validation,
        AppUserController.AppUserPost.login
    )
}
