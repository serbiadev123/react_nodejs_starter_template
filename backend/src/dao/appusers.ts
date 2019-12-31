import * as uuid from 'uuid'
import * as bcrypt from 'bcrypt'
import { AppUser } from '../sqlz/models/appuser/_index'
import { UserRole } from '../sqlz/models/userrole/_index'
import { DATABASE_SEARCH_RESULT } from '../enums/databaseSearchResults'
import { Op } from 'sequelize'

const { or, and, gt, lt } = Op

export function create(appUser: any): Promise<any> {
    // finalize create

    return
    //   return Language.findOne({
    //     where: { name: 'fr' }
    //   })
    //     .then(language => {
    //       return AppUser
    //         .create({
    //           id: uuid.v1(),
    //           email: appUser.email,
    //           pwd: appUser.pwd,
    //           languageId: language.get('id')
    //         })
    //     })
}

export function findAll(): Promise<any> {
    return AppUser
        .findAll({ include: [{ all: true }] })
}

export function login(appUser: any): Promise<any> {
    return AppUser
        // Find user based on the username or email
        .findOne({
            [or]: [
                {
                    where: {
                        email: appUser.username
                    }
                },
                {
                    where: {
                        username: appUser.username
                    }
                }
            ],
            include: [UserRole]
        })
        // return error if the user does not exist in the database
        .then(user => {
            if (!user) {
                throw DATABASE_SEARCH_RESULT.NOT_FOUND
            }
            return user
        })
        // check if the passes password is valid and return the user, or error if the password is not valid
        .then(user => {
            return bcrypt.compare(appUser.pwd, user.pwd)
                .then(res => {
                    if (res) {
                        return user
                    }
                    throw DATABASE_SEARCH_RESULT.INVALID_PASSWORD
                })
        })
}
