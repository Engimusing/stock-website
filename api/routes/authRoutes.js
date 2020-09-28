const router = require("express").Router();
const bcrypt = require("bcryptjs");
const generateToken = require("../middleware/generateToken");

const users = require('../data/models/usersModel')

router.post('/register', (req, res) => {
    let user = req.body;
    let hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    users.add(user).then(saved => {
        res.status(201).json(saved);
    }).catch(err => {
        console.log(err);
        res.status(500).json("Something went Wrong.");
    })
});

module.exports = router;