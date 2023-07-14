require("dotenv").config()

let mongoUrl = process.env.MONGODB_URI
let PORT = process.env.PORT || 3003

module.exports = {
	mongoUrl,
	PORT
}