const UserModel = require('../Models/User');

const signupList = async (req, res) => {
    try {
        const user = await UserModel.find();
                res.status(201)
            .json({
                user,
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

module.exports = {signupList};