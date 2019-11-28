import { Model, STRING, UUID } from 'sequelize'
import sequelize from './_index'
import { AppUser } from './appuser'

export class UserRole extends Model {
}

export class LanguageModel {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
}

UserRole.init(
    {
        name: STRING(50)
    },
    { sequelize, modelName: 'UserRole' }
)


