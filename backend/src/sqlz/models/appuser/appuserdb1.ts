import { Model, STRING } from 'sequelize'
import sequelizeDbs from '../_index'
import { UserRoleDb1 } from '../userRole/userRoleDb1'

export class AppUserDb1 extends Model {
    id: string
    email: string
    username: string
    firstName: string
    lastName: string
    pwd: string
    UserRole: UserRoleDb1
    createdAt: Date
    updatedAt: Date
}

if (!sequelizeDbs || sequelizeDbs.length < 1) {
    throw new Error('Invalid sequalize settings, missing DB1 settings')
}

AppUserDb1.init(
    {
        email: STRING(50),
        username: STRING(50),
        firstName: STRING(50),
        lastName: STRING(50),
        pwd: STRING(50)
    },
    { sequelize: sequelizeDbs[0], modelName: 'AppUser' }
)

AppUserDb1.belongsTo(UserRoleDb1, {
    foreignKey: 'userRoleId'
})

