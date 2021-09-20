const express = require("express")
const router = express.Router();
const UserModel = require("../models/UserMongoModel")
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const getUser = require("../middleware/getUserDetails")


let sucess = false

router.post("/signup", [
    body("Email", "Enter a valid Email").isEmail(),
    body("Name", "Enter a correct Name").isLength({ min: 5 }),
    body("Password", "Password is invalid").isLength({ min: 8 })
], async (req, res) => {

    const erros = validationResult(req);
    if (!erros.isEmpty()) {
        return res.status(400).json({ errors: erros.array() });
    }

    ifUserExist = await UserModel.findOne({ Email: req.body.Email })
    if (ifUserExist) {
        return res.json({ error: "user already exists" })
    } else {

        const salt = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(req.body.Password, salt);
        const user = await UserModel.create({
            Name: req.body.Name,
            Email: req.body.Email,
            Password: securePassword
        })

        const JWT_SECRET = "Piyush likes food"
        let data = {
            user: {
                id: user.id
            }
        }
 
        const authToken = jwt.sign(data, JWT_SECRET);
        sucess = true
        res.json({ sucess, authToken });
    }
})

router.post("/login", [
    body("Email", "Please enter a valid email").isEmail(),
    body("Password", "Enter valid password").exists()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { Email, Password } = req.body;

    try {

        let user = await UserModel.findOne({ Email });

        if (!user) {
            return res.status(400).json({ Error: "Invalid credentials -1" })
        }


        const comparePassword = await bcrypt.compare(Password, user.Password)

        if (!comparePassword) {
            return res.status(400).json({ Error: "Invalid credentials -2" })
        }

        let data = {
            user: {
                id: user.id
            }
        }


        const JWT_SECRET = "Piyush likes food"

        const authToken =  jwt.sign(data, JWT_SECRET);
        sucess = true
        res.json({sucess, authToken });

    } catch (error) {
        return res.status(500).send("Some error occured").json({ error });
    }

})

router.post("/getuser", getUser, async(req,res)=> {

    try {
        userID = req.User.id;

        const userData = await UserModel.findById(userID).select("-Password")
        res.send(userData)

    } catch (error) {
        return res.status(500).send("Some error occured").json({ error });
    }

})

module.exports = router