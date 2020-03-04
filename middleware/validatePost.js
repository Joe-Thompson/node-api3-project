function validatePost() {
    return ( req, res, next ) => {
           let data = {
                text: req.body.text,
                user_id: Number(req.params.id)
            };
        if (!req.body) {
            return res.status(400).json({
                message: "missing post data"
            })
        }  else {
            req.data = data;
            next();
        }
    }
}

module.exports = validatePost();
