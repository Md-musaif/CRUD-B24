const UserModel = require('../Models/User');

const signupDelete = async (req, res) => {
    const id = req.params.id;// Getting the id from the request URL
    try {
                  // Find the User with the matching id
        const user = await UserModel.findByIdAndDelete(id);
        if (!user) {
            return res.status(404)
                .json({
                    success: false,
                    message: 'User not found',
                });
        }
                res.status(201)
            .json({
                user,
                 message: "Deleted Successflly",
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

module.exports = {signupDelete};