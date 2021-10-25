const users = require('../model/user')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signup = (req, res) => {
    const { name, password, mobile } = req.body;
    if (!name || !password || !mobile) {
        return res.status(400).json({ message: "enter all required fields" })
    }
    users.findOne({ email: email }).then((user) => {
        if (user) {
            return res.status(400).json({ message: "user already exists" })
        } else {
            bcrypt.genSalt(10, (error, salt) => {
                bcrypt.hash(password, salt, (error, hash) => {
                    if (error) throw error;
                    const newUser = new users({
                        name: name,
                        password: hash,
                        mobile: mobile
                    });
                    newUser
                        .save()
                        .then((user) => {
                            return res.status(200).json({ message: "user saved successfully" })
                        })
                        .catch((error) => {
                            return res.status(500).json({ message: error.message })
                        })
                })
            })
        }
    })
}


module.exports.login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Please enter all the fields." });
    }
    users.findOne({ email: email }).then((user) => {
        if (!user) {
            return res.status(400).json({ message: "User does not exist." });
        }
        //password validation
        bcrypt.compare(password, user.password).then((isMatch) => {
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid email or password." });
            }
            jwt.sign(
                { id: user._id },
                (err, token) => {
                    if (err) {
                        throw err;
                    }
                    return res
                        .status(200)
                        .json({ token: token, user: { id: user._id, name: user.name, email: user.email } }); //remove user later
                }
            );
        });
    });
};