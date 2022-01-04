const User = require("../models/User");
exports.getData = async (req, res) =>{
    try {
        const result = await User.fetchData();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message:"Server error"})
    }
}