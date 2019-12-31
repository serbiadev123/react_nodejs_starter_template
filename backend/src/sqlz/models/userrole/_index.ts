// to avoid circular dependency it is best to have an _index file where we will connect the models

import { UserRole } from './userRole'
import { AppUser } from '../appuser/_index'

// Here you can put the model connections to each other
UserRole.hasMany(AppUser, {
    foreignKey: 'userRoleName',
    sourceKey: 'name'
})

export { UserRole }
