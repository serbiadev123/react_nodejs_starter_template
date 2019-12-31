import { QueryInterface, UUID, UUIDV4, STRING, DATE } from 'sequelize'

const USER_ROLE_TABLE_NAME = 'UserRoles'

export = {
    USER_ROLE_TABLE_NAME,
    up: (queryInterface: QueryInterface) => {
        return queryInterface.createTable(USER_ROLE_TABLE_NAME, {
            id: {
                allowNull: false,
                type: UUID,
                defaultValue: UUIDV4,
                primaryKey: true
            },
            name: {
                allowNull: false,
                type: STRING(50),
                unique: true
            },
            createdAt: {
                allowNull: false,
                type: DATE
            },
            updatedAt: {
                allowNull: false,
                type: DATE
            }
        })
    },
    down: (queryInterface) => {
        return queryInterface.dropTable(USER_ROLE_TABLE_NAME)
    }
}
