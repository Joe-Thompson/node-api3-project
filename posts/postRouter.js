const express = require('express');
const helpers = require("./postDb");
const Post = require("../middleware/validatePostId");
const Content = require("../middleware/validatePost");

const router = express.Router();

router.get('/', (req, res, next) => {
    helpers.get()
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            next()
        })
});

router.get('/:id', Post, (req, res, next) => {
  helpers.getById(req.params.id)
      .then(post => {
          res.status(200).json(post)
      })
      .catch(err => {
          next()
      })
});

router.delete('/:id', Post,  (req, res, next) => {
    helpers.remove(req.params.id)
        .then(post => {
            res.status(204).json(post)
        })
        .catch(err => {
            next()
        })
});

router.put('/:id', Post, Content,  (req, res,next) => {
    helpers.update(req.params.id, req.body)
        .then(post => {
            res.status(201).json(post)
        })
        .catch(err => {
            next()
        })
});


module.exports = router;
