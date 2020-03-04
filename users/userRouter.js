const express = require('express');
const helpers = require("./userDb");
const Id = require("../middleware/validateId");
const User = require("../middleware/validateUser");
const Post = require("../middleware/validatePost");
const postHelpers = require("../posts/postDb");

const router = express.Router();

router.post('/',User,  (req, res, next) => {
    helpers.insert(req.body)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            next()
        })
});

router.post('/:id/posts',Id, Post,  (req, res, next) => {
    const data = {
        ...req.body,
        user_id: Number(req.params.id)
    };
    postHelpers.insert(data)
        .then(post => {
            console.log(req.data);
            res.status(201).json(post)
        })
        .catch(err => {
            console.log(data);
            next(err)
        })
});

router.get('/', (req, res, next) => {
    helpers.get()
        .then(users => {
            return res.status(200).json(users)
        })
        .catch(err => {
            next()
        })
});

router.get('/:id', Id,  (req, res) => {
    return res.status(200).json(req.user)
});

router.get('/:id/posts',Id,  (req, res, next) => {
    helpers.getUserPosts(req.params.id)
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            next();
        })

});

router.delete('/:id',Id,  (req, res, next) => {
    helpers.remove(req.params.id)
        .then(user => {
            res.status(204).json(user)
        })
        .catch(err => {
            next()
        })
});

router.put('/:id',Id, User, (req, res, next) => {
    helpers.update(req.params.id, req.body)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            next()
        })
});


module.exports = router;
