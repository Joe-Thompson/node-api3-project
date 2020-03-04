module.exports = (req, res, next) => {
  const { method, url } = req;
  const time = Date.now();

  console.log(`User-method = ${method} -- User-url = ${url} -- Time = ${time}`);
    next()
};
