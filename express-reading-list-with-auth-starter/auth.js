const loginUser = (req, res, user) => {
    req.session.auth = {
        userId: user.id,
    }
}

module.exports = {
    loginUser,
}

// now that you've configured sessions in express app, you can persist the user's login state using a session

// helps keep code organized