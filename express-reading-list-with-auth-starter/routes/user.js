const express = require("express")
const { check, validationResult } = require("express-validator")

const db = require('../db/models')
const { csrfProtection, asyncHandler } = require("./utils")

const router = express.Router

router.get("/user/register", csrfProtection, (req, res) => {
    const user = db.User.build();
    res.render("user-register", {
        title: "Register",
        user,
        csrfToken: req.csrfToken()
    })
})

const userValidators = [
    //todo
]

