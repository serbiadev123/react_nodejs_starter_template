
import { QueryInterface, UUID, UUIDV4, STRING, DATE } from 'sequelize'

import ROLE_TYPE_MIGRATION = require('./20170305171002-create-role-type')

const USERS_TABLE_NAME = 'AppUsers'

export = {
    USERS_TABLE_NAME,
    up: (queryInterface: QueryInterface) =>
        queryInterface.createTable(USERS_TABLE_NAME, {
            id: {
                allowNull: false,
                type: UUID,
                defaultValue: UUIDV4,
                primaryKey: true
            },
            email: {
                allowNull: false,
                type: STRING(50),
                unique: true
            },
            username: {
                allowNull: false,
                type: STRING(50),
                unique: true
            },
            firstName: {
                allowNull: false,
                type: STRING(50),
            },
            lastName: {
                allowNull: false,
                type: STRING(50),
            },
            pwd: {
                allowNull: false,
                type: STRING(255)
            },
            createdAt: {
                allowNull: false,
                type: DATE
            },
            updatedAt: {
                allowNull: false,
                type: DATE
            },
            userRoleName: {
                type: STRING(50),
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: ROLE_TYPE_MIGRATION.USER_ROLE_TABLE_NAME,
                    key: 'name'
                }
            }
        }),
    down: (queryInterface: QueryInterface) => queryInterface.dropTable(USERS_TABLE_NAME)
}
