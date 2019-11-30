import { check } from 'express-validator'

export const CreateUserValidationRules = () => {
    return [
        check('pwd', 'Password is required').notEmpty(),
        check('email', 'Email is required').notEmpty(),
        check('email', 'A valid email is required').isEmail()
    ]
}

export const LoginUserValidationRules = () => {
    return [
        check('pwd', 'Password is required').notEmpty(),
        check('username', 'Username or Email is required').notEmpty()
    ]
}
