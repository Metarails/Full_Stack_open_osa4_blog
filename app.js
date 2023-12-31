const http = require("http")
const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const config = require("./utils/config")
const blogsRouter = require("./controllers/blogs")
const { dummy } = require("./utils/list_helper")

mongoose.connect(config.mongoUrl)
	.then(() => {
		console.log("connected to MongoDB")
	})
	.catch((error) => {
		console.log("error connection to MongoDB:", error.message)
	})

app.use(cors())
app.use(express.json())

app.use("/api/blogs", blogsRouter)

module.exports = app