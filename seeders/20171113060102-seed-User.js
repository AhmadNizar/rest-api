'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      name: 'AhmadNizar',
      age: 22,
      email: 'ahmadnizar.owl@gmail.com',
      isAdmin: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name: 'Bang Ipul',
      age: 29,
      email: 'bangIpul@gmail.com',
      isAdmin: false,
      createdAt : new Date(),
      updatedAt : new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
