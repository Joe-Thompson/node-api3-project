function validateUser() {
    return ( req, res, next ) => {
                if (!req.body) {
                   return res.status(400).json({
                        message: "missing user data"
                    })
                } else if (!req.body.name) {
                    return res.status(400).json({
                        message: "missing required name field"
                    })
                } else {
                    next();
                }
    }
}

module.exports = validateUser();

