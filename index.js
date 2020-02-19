const express = require("express");
const helmet = require("helmet");
const welcomeRouter = require("./middleware/welcomeRouter");
const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");
const logger = require("./middleware/logger");

const server = express();
const port = 4000;

server.use(logger);
server.use(helmet());
server.use(express.json());
server.use("/", welcomeRouter);
server.use("/users", userRouter);
server.use("/posts", postRouter);

server.use((req, res) => {
    res.status(404).json({ message: "Route was not found" })
});

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Server error, please try again."
    })
});

server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
});
