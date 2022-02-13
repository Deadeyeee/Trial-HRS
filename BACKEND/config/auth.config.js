require('dotenv').config()

module.exports = {
    auth: {
        secret: process.env.ACCESS_TOKEN_SECRET,
      },
}