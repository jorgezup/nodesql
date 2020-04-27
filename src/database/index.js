const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

/* Importação do Model */
const User = require('../models/User')
const Address = require('../models/Address')
const Tech = require('../models/Tech')

const connection = new Sequelize(dbConfig)


/* Inicia a coneção */
User.init(connection)
Address.init(connection)
Tech.init(connection)

User.associate(connection.models)
Address.associate(connection.models)
Tech.associate(connection.models)

module.exports = connection