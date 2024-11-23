const bcrypt = require('bcrypt');

const UserModel = require('../Models/User');

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: "Already exists", success: false })
        }
        const userModel = new UserModel({ name, email, password })
        userModel.password = await bcrypt.hash(password, 10)
        await userModel.save()
        res.status(201)
            .json({
                 message: "Success",
                 success: true 
                })
    } catch (error) {
        res.status(500)
            .json({
                 message: "Internal err", 
                 success: false 
                })

    }
}

module.exports = {signup};