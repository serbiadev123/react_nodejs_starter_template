module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('AppUsers', {
            id: {
                allowNull: false,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1,
                primaryKey: true
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING(50),
                unique: true
            },
            username: {
                allowNull: false,
                type: Sequelize.STRING(50),
                unique: true
            },
            firstName: {
                allowNull: false,
                type: Sequelize.STRING(50),
            },
            lastName: {
                allowNull: false,
                type: Sequelize.STRING(50),
            },
            pwd: {
                allowNull: false,
                type: Sequelize.STRING(255)
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            languageId: {
                type: Sequelize.UUID,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'Languages',
                    key: 'id',
                    as: 'languageId',
                }
            },
            userRoleId: {
                type: Sequelize.UUID,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'UserRoles',
                    key: 'id',
                    as: 'userRoleId',
                }
            }
            })
    ,
    down: (queryInterface, Sequelize) => queryInterface.dropTable('AppUsers')
}
