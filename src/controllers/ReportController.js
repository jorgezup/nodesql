const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
    async show(req, res) {
        //Encontrar todos os usuários que tem email @gmail
        // Desses usuários buscar quem mora em determinada rua dr. julio de almeida
        // Desses usuários buscar as tecnologias que começam com react

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'R. Dr. Júlio de Almeida' } },
                { 
                    association: 'techs', 
                    required: false,
                    where: { 
                        name: { 
                            [Op.iLike]: 'React%' 
                        } 
                    } 
                }
            ]
        })
        return res.json(users)
    }
}