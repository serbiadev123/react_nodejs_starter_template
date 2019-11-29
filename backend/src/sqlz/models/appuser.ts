import { Model, STRING, UUID, Deferrable } from 'sequelize'
import sequelize from './_index'
import { UserRole } from './userRole'

export class AppUser extends Model {

}

export class AppUserModel {
    id: string
    email: string
    username: string
    firstName: string
    lastName: string
    pwd: string
    createdAt: Date
    updatedAt: Date
}

AppUser.init(
    {
        email: STRING(50),
        username: STRING(50),
        firstName: STRING(50),
        lastName: STRING(50),
        pwd: STRING(50)
    },
    { sequelize, modelName: 'AppUser' }
)

AppUser.belongsTo(UserRole, {
    foreignKey: 'userRoleId'
})

