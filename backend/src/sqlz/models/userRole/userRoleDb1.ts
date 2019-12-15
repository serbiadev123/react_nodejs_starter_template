import { Model, STRING } from 'sequelize'
import sequelizeDbs from '../_index'

export class UserRoleDb1 extends Model {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
}

if (!sequelizeDbs || sequelizeDbs.length < 1) {
    throw new Error('Invalid sequalize settings, missing DB1 settings')
}

UserRoleDb1.init(
    {
        name: STRING(50)
    },
    { sequelize: sequelizeDbs[0], modelName: 'UserRole' }
)


