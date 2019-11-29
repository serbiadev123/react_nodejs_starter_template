'use strict';

const uuidv4 = require('uuid/v4');

const USER_ROLES = {
    GUEST: 'GUEST',
    USER: 'USER',
    ADMIN: 'ADMIN'
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        const keys = Object.keys(USER_ROLES);

        const userRoles = keys.map((key)=>{
            return {
                id: uuidv4(),
                name: key,
                createdAt : new Date(),
                updatedAt : new Date()
            }
        })

        return queryInterface.bulkInsert('UserRoles', userRoles, {});
    },

    down: (queryInterface, Sequelize) => {
        const keys = Object.keys(USER_ROLES);

        const userRoles = keys.map((key)=>{
            return {
                name: key,
            }
        })
        
        return queryInterface.bulkDelete('UserRoles', userRoles)
    },

    USER_ROLES
};
