//jshint esversion:6

exports.isAuthenticated = (req, res, next) => {
    if(req.session.isAuthenticated !== true) {
        return res.status(401).json({
            errorMsg: "User not logged in"
        })
    }
    next()
}