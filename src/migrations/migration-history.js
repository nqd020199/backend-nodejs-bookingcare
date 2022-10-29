'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('history', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            patientid: {
                type: Sequelize.STRING
            },
            doctorid: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            files: {
                type: Sequelize.TEXT
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('history');
    }
};
