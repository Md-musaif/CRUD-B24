const UserModel = require('../Models/User');

const signupByid = async (req, res) => {
    const id = req.params.id; // Getting the id from the request URL
    try {
          // Find the User with the matching id
        const user = await UserModel.findById(id);
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
                message: "User Fetched Successfully",
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

module.exports = { signupByid };