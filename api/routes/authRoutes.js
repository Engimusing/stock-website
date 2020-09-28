const router = require("express").Router();
const bcrypt = require("bcryptjs");
const generateToken = require("../middleware/generateToken");

const users = require('../data/models/usersModel')

