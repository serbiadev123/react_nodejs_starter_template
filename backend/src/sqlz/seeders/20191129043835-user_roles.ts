import { QueryInterface, Op } from 'sequelize'
import * as uuidv4 from 'uuid/v4'
import { USER_ROLES } from '../../enums/userRoles'
import ROLE_TYPE_MIGRATION = require('../migrations/20170305171002-create-role-type')

export = {
    up: (queryInterface: QueryInterface) => {
        const userRoles = Object.values(USER_ROLES).map((userRole: string) => {
            return {
                id: uuidv4(),
                name: userRole,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        })

        return queryInterface.bulkInsert(ROLE_TYPE_MIGRATION.USER_ROLE_TABLE_NAME, userRoles, {})
    },

    down: (queryInterface: QueryInterface) => {
        // empty object in where will get all values
        return queryInterface.bulkDelete(ROLE_TYPE_MIGRATION.USER_ROLE_TABLE_NAME, {})
    }
}

// TODO: FINALIZE SEEDER< THEN TEST THE MODELS AND MODEL CONNECTIONS< ESPECCIALY GETASSOSIATION FUNCTIONS 
// WHICH ARE ADDED TO THE MODEL
