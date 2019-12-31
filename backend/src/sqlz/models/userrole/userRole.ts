import { STRING, UUIDV4, NOW, DATE } from 'sequelize'
// these are all included as an example of different connections, remove them when reusing this class
import {
    HasManyGetAssociationsMixin,
    Association,
    HasManyCountAssociationsMixin
} from 'sequelize'

import { ModelmySql } from '../initializeDbConnection'
import { AppUser } from '../appuser/_index'

export class UserRole extends ModelmySql {
    static MODEL_NAME: string = 'UserRole'

    id!: string
    name!: string

    public getUsers!: HasManyGetAssociationsMixin<AppUser> // Note the null assertions!
    public countUsers!: HasManyCountAssociationsMixin

    public readonly users?: AppUser[]

    public static associations: {
        users: Association<AppUser, AppUser>
    }
}

UserRole.init(
    {
        id: {
            type: STRING(50),
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name: STRING(50),
        createdAt: {
            type: DATE,
            allowNull: false,
            defaultValue: NOW
        },
        updatedAt: {
            type: DATE,
            allowNull: false,
            defaultValue: NOW
        }
    },
    { sequelize: ModelmySql.SequelizeConnection, modelName: this.MODEL_NAME }
)

UserRole.hasMany(AppUser, {
    foreignKey: {
        name: 'userRoleName'
    },
    sourceKey: 'name',
})
