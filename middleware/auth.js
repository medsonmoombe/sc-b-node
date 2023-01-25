const auth = (req, res, next) => {
    console.log(req);
    res.json({ error: " unauthorized user" })
    next()
  }
  
  module.exports = auth;