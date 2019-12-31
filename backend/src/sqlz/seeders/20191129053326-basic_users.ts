import { QueryInterface } from 'sequelize'
import * as uuidv4 from 'uuid/v4'
import * as bcrypt from 'bcrypt'
import * as faker from 'faker'

import { USER_ROLES } from '../../enums/userRoles'
import USER_MIGRATION = require('../migrations/20170305171003-create-app-user')

const defineInitialUsers = (userCount: number) => {
    const users = []

    const ADMIN = {
        id: uuidv4(),
        email: 'admin@admin.gmail',
        username: 'admin',
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        pwd: bcrypt.hashSync('admin', 10),
        userRoleName: USER_ROLES.ADMIN,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    users.push(ADMIN)

    for (let i = 0; i < userCount; i++) {
        users.push({
            id: uuidv4(),
            email: faker.unique(faker.internet.email),
            username: faker.unique(faker.internet.userName),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            pwd: bcrypt.hashSync('user', 10),
            userRoleName: USER_ROLES.USER,
            createdAt: new Date(),
            updatedAt: new Date()
        })

    }
    return users
}

module.exports = {
    up: async (queryInterface: QueryInterface) => {
        const users = defineInitialUsers(200)
        return queryInterface.bulkInsert(USER_MIGRATION.USERS_TABLE_NAME, users, {})
    },

    down: async (queryInterface: QueryInterface) => {
        return queryInterface.bulkDelete(USER_MIGRATION.USERS_TABLE_NAME, {})
    }
}
