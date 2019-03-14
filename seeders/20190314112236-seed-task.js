'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

   return queryInterface.bulkInsert('Tasks', [{
      title: 'Task 1',
      content: 'Content lorem ipsum',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      title: 'Task 2',
      content: 'Content lorem ipsum',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      title: 'Task 3',
      content: 'Content lorem ipsum',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },{
      title: 'Task 4',
      content: 'Content lorem ipsum',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
