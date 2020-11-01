const db = require("./db/models");

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  };
};

const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
        return res.redirect('/user/login')
    }
    return next()
}

const restoreUser = async (req, res, next) => {
  // Log the session object to the console
  // to assist with debugging.
  console.log(req.session);

    if (req.session.auth) {
      //get the user's id
    const { userId } = req.session.auth;

        try {
        // get the user from the database
      const user = await db.User.findByPk(userId);

            if (user) {
          // set true to indicate that the current request has a authenticated user
                res.locals.authenticated = true;
                // user set to the user that was just retrieved from the DB
        res.locals.user = user;
        next();
      }
        } catch (err) {
            // anon request
      res.locals.authenticated = false;
      next(err);
    }
  } else {
    res.locals.authenticated = false;
    next();
  }
};

const logoutUser = (req, res) => {
    delete req.session.auth;
}



module.exports = {
  loginUser,
  restoreUser,
    logoutUser,
  requireAuth,
};

// now that you've configured sessions in express app, you can persist the user's login state using a session

// helps keep code organized