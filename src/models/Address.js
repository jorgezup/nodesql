const { Model, DataTypes } = require('sequelize')

class Address extends Model {
    /* Recebe a coneção do sequelize */
    static init(connection) {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize: connection /* conexão com o banco de dados */
        })
    }

    /* Relacionamento */
    static associate(models) {
        /* 1-N */
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    }
}

module.exports = Address