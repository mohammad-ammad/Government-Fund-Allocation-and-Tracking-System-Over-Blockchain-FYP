const User = require("../models/User");
exports.getData = async (req, res) =>{
    try {
        const [result] = await User.fetchData(3);
        res.status(200).json(result[0]);
    } catch (error) {
        res.status(500).json({message:"Server error"})
    }
}