const UserModel = require('../Models/User');

const signupUpdate = async (req, res) => {
    const { id } = req.params; // Get the userId from the route parameter
    const { name, email, password } = req.body; // Get the data from the request body
    try {
        const user = await UserModel.findByIdAndUpdate(
            id, 
            { name, email, password },  // Fields to update
            { new: true }           // Return the updated document
        );
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
                message: "User Updated Successfully",
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

module.exports = { signupUpdate };