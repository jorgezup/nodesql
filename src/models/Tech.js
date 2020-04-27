const { Model, DataTypes } = require('sequelize')

class Tech extends Model {
    /* Recebe a coneção do sequelize */
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize: connection, /* conexão com o banco de dados */
            tableName: 'techs' 
        })
    }

    /* Relacionamento */
    static associate(models) {
        /* N-N */
        this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users' })
    }
}

module.exports = Tech