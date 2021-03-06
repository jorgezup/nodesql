'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_techs', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id'},  /* FOREIGN KEY */
        onupdate: 'CASCADE', /* o que acontece caso o id do user mude?  faz a alteração tbm*/
        ondelete: 'CASCADE', /* o que acontece caso o id do user seja deletado?  deleta tbm*/
      },
      tech_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'techs', key: 'id'},  /* FOREIGN KEY */
        onupdate: 'CASCADE', /* o que acontece caso o id do user mude?  faz a alteração tbm*/
        ondelete: 'CASCADE', /* o que acontece caso o id do user seja deletado?  deleta tbm*/
      },
      created_at : {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at : {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_techs');
    
  }
};
