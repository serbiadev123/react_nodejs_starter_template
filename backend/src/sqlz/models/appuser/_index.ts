// to avoid circular dependency it is best to have an _index file where we will connect the models

import { AppUser } from './appuser'
import { UserRole } from '../userrole/_index'

// Here you can put the model connections to each other
AppUser.belongsTo(UserRole, {
    foreignKey: 'userRoleName',
    targetKey: 'name'
})

export { AppUser }
