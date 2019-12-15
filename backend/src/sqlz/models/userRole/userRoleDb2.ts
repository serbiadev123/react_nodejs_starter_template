import { Model, STRING } from 'sequelize'
import sequelizeDbs from '../_index'

export class UserRoleDb2 extends Model {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
}

if (!sequelizeDbs || sequelizeDbs.length < 2) {
    throw new Error('Invalid sequalize settings, missing DB2 settings')
}

UserRoleDb2.init(
    {
        name: STRING(50)
    },
    { sequelize: sequelizeDbs[1], modelName: 'UserRole' }
)


