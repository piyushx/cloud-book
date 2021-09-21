const jwt = require("jsonwebtoken")
const JWT_SECRET = "Piyush likes food"
 
const getUser = async(req,res, next) => {

    const token = req.header("auth-token")
    if(!token) {
        res.status(401).send("Access denied")
    }

    try {
        const string = await jwt.verify(token, JWT_SECRET)
        req.User = string.user;
        next()

    } catch (error) {
        res.send("Bad request")
    }
}

module.exports = getUser;