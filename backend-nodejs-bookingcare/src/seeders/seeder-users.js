'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'example@example.com',
      password: 'admin',
      firstName: 'Nguyen',
      lastName: 'Quoc Dai',
      address: 'Ho Chi Minh city, Viet Nam',
      phoneNumber: '0967264572',
      gender: 1,
      roleId: 'R1',
      positionId: 'admin',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};