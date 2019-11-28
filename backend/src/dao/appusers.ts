import * as uuid from 'uuid'
import { AppUser } from './../sqlz/models/appuser'
import { UserRole } from '../sqlz/models/userRole'
import { DATABASE_SEARCH_RESULT } from '../enums/databaseSearchResults'
import { Op } from 'sequelize'
const { or, and, gt, lt } = Op

export function create(appUser: any): Promise<any> {
    // finalize create

    return;
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
        .findOne({
            where: {
                email: appUser.username,
                pwd: appUser.pwd
            },
            [or]: [
                {
                    where: {
                        username: appUser.username,
                        pwd: appUser.pwd
                    }
                }
            ],
            include: [UserRole]
        })
        .then(user => {
            if (!user) {
                throw DATABASE_SEARCH_RESULT.NOT_FOUND
            }
            return user
        })
}
