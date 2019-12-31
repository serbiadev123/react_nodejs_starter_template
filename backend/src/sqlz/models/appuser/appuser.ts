import { STRING, UUIDV4, NOW, DATE } from 'sequelize'
// these are all included as an example of different connections, remove them when reusing this class
import {
    HasOneGetAssociationMixin,
    HasManyAddAssociationMixin,
    HasManyHasAssociationMixin,
    Association,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin
} from 'sequelize'

import { ModelmySql } from '../initializeDbConnection'
import { UserRole } from '../userrole/_index'

// the variables defined in this class will allow you to use them in the model retrieved from the database
// safely. The typescript validation will see that they exist and allow you to use them. You don't need to
// make them same as init, if you don't plan to use some of the values.

export class AppUser extends ModelmySql {
    // for easier use, assign the mdoel name to a static variable, so it can be accessed anywhere where the model is used
    // to avoid hardcoding values
    static MODEL_NAME: string = 'AppUser'

    public id!: string
    public email: string
    public username: string
    public firstName: string
    public lastName: string
    public pwd: string
    public userRoleName: string
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date

    // example of nullable field
    // someName!: string | null

    // Since TS cannot determine model association at compile time
    // we have to declare them here purely virtually
    // these will not exist until `Model.init` was called.

    public getUserRole!: HasOneGetAssociationMixin<UserRole>

    // You can also pre-declare possible inclusions, these will only be populated if you
    // actively include a relation.
    // public readonly projects?: Projects[] // Note this is optional since it's only populated when explicitly requested in code

    public readonly UserRole!: UserRole

    public static associations: {
        UserRole: Association<AppUser, UserRole>;
    }
}

// this will initiate the model. Sequelize usses the id field as a unique key, so make sure to add ID if you are using it,
// and to remove it if you are not using it. Considering this model will not be used to generate the table in the database,
// but the migration, it doesn't have to be same as the table it self, but it can not hurt.
AppUser.init(
    {
        id: {
            type: STRING(128),
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        email: STRING(128),
        username: STRING(128),
        firstName: STRING(128),
        lastName: STRING(128),
        pwd: STRING(128),
        userRoleName: STRING(128),
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
