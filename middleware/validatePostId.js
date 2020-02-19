const helpers = require("../posts/postDb");

function validatePostId() {
    return (req, res, next) => {
        helpers.getById(req.params.id)
            .then((id) => {
                if (id) {
                    req.id = id;
                    next();
                } else {
                    res.status(404).json({
                        message: "Invalid post id"
                    })
                }
            })
            .catch((err) => {
                next();
            })
    }
}

module.exports = validatePostId();
