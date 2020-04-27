const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const users = await User.findAll()

        return res.json(users)
    },
    async store(req, res) {
        const { name, email } = req.body

        const user = await User.create({ name, email }) /* cria um usuário */

        return res.json(user)
    },
    async update(req, res) {
        const { id } = req.params
        const { name, email } = req.body

        let user = await User.findByPk(id)

        if (!user) {
            return res.status(400).json({ error: "User not found" })
        }

        await User.update({
            name: name, 
            email: email, 
        }, 
        {
            where: {
                id: id
            }
        })

        user = await User.findByPk(id)
        
        res.json(user)
    },
    async delete(req, res) {
        const { id } = req.params

        const user = await User.findByPk(id)

        if (!user) {
            return res.status(400).json({ error: "User not found" })
        }

        await User.destroy({
            where: {
                id: id
            }
        })
        res.json()
    }
}