const  userModel = require('../models/user.model')
const bcryptjs = require('bcryptjs');
const blacklistTokenModel = require('../models/blacklistToken.model');
const jwt = require('jsonwebtoken');


module.exports.authUser = async (req,res,next)=>{
    // console.log(req.headers.authorization);
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    
    if (!token){
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isTokenBlacklisted = await blacklistTokenModel.findOne({token:token});
    if (isTokenBlacklisted) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;
        return next();
    }catch (err){
        return res.status(500).json({ message: "Unauthorized" });
}
}