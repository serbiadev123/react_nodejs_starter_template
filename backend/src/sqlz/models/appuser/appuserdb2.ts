import { Model, STRING, UUID, Deferrable } from 'sequelize'
import sequelizeDbs from '../_index'
import { UserRoleDb2 } from '../userRole/userRoleDb2'

export class AppUserDb2 extends Model {
    id: string
    email: string
    username: string
    firstName: string
    lastName: string
    pwd: string
    UserRole: UserRoleDb2
    createdAt: Date
    updatedAt: Date
}

if (!sequelizeDbs || sequelizeDbs.length < 2) {
    throw new Error('Invalid sequalize settings, missing DB2 settings')
}

AppUserDb2.init(
    {
        email: STRING(50),
        username: STRING(50),
        firstName: STRING(50),
        lastName: STRING(50),
        pwd: STRING(50)
    },
    { sequelize: sequelizeDbs[1], modelName: 'AppUser' }
)

AppUserDb2.belongsTo(UserRoleDb2, {
    foreignKey: 'userRoleId'
})

