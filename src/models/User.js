const { Model, DataTypes } = require('sequelize')

class User extends Model {
    /* Recebe a coneção do sequelize */
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize: connection /* conexão com o banco de dados */
        })
    }
    /* Relacionamento */
    static associate(models) {
        /* N-1 */
        this.hasMany    (models.Address, { foreignKey: 'user_id', as: 'addresses' })
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' })
    }
}

module.exports = User