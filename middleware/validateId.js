const helpers = require("../users/userDb");

function validateId() {
    return (req, res, next) => {
        helpers.getById(req.params.id)
            .then((id) => {
                if (id) {
                    req.id = id;
                    next();
                } else {
                    res.status(404).json({
                        message: "Invalid user id"
                    })
                }
            })
            .catch((err) => {
                next();
            })
    }
}

module.exports = validateId();

