'use strict';

const USER_ROLES = require('./20191129043835-user_roles').USER_ROLES;
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');

const defineInitialUsers = async queryInterface => {
    const users = []

    const ADMIN = {
        id: uuidv4(),
        email: 'admin@admin.gmail',
        username: 'admin',
        firstName: 'fradmin',
        lastName: 'lsadmin',
        pwd: bcrypt.hashSync('admin', 10),
        createdAt : new Date(),
        updatedAt : new Date(),
    }
    
    const USER = {
        id: uuidv4(),
        email: 'user@user.gmail',
        username: 'user',
        firstName: 'fruser',
        lastName: 'lsuser',
        pwd: bcrypt.hashSync('user', 10),
        createdAt : new Date(),
        updatedAt : new Date(),
    }

    let adminRoleId = null

    try{
        adminRoleId = await queryInterface.rawSelect('UserRoles', {
            where: {
                name: USER_ROLES.ADMIN,
            },
        }, ['id']);
    } catch(e) {
        console.log('Error getting admin role, skipping admin creation. ERROR:', e)
    }

    if (adminRoleId) {
        ADMIN['userRoleId'] = adminRoleId
        users.push(ADMIN)
    }

    let userRoleId = null
    
    try{
        userRoleId = await queryInterface.rawSelect('UserRoles', {
            where: {
                name: USER_ROLES.USER,
            },
        }, ['id']);
    } catch(e) {
        console.log('Error getting user role, skipping user creation. ERROR:', e)
    }

    if (adminRoleId) {
        USER['userRoleId'] = userRoleId
        users.push(USER)
    }

    return users
}


module.exports = {
    up: async (queryInterface, Sequelize) => {
        const users = await defineInitialUsers(queryInterface)

        return queryInterface.bulkInsert('AppUsers', users, {});
    },

    down: async (queryInterface, Sequelize) => {
        let users = await defineInitialUsers(queryInterface)
        users = users.map((user)=> {
            return {username: user.username}
        })
        
        return queryInterface.bulkDelete('AppUsers', users)
    }
};
