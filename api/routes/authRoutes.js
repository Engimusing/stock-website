const router = require("express").Router();
const bcrypt = require("bcryptjs");
const generateToken = require("../middleware/generateToken");

const users = require('../data/models/usersModel')

router.post('/register', (req, res) => {
    let user = req.body;
    let password = user.password;
    let hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    users.add(user).then(saved => {
        users.findByUsername(saved.username).then(newUser => {
            if(newUser && bcrypt.compareSync(password, newUser.password)) {
                const token = generateToken(newUser);
                res.status(201).json({
                    id: newUser.id,
                    username: newUser.username,
                    message: `Welcome ${newUser.username}!`,
                    token
                })
            } else {
                res.status(401).json("Unable to generate a Token. Please check your credentials and try again.")
            }
            
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json("Something went Wrong.");
    })
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    users.findByUsername(username).then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
            id: user.id,
            message: `Welcome ${user.username}`,
            token,
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      }).catch(err => {
        console.log(err);
        res.status(500).json("Something went Wrong.");
    })
});

module.exports = router;