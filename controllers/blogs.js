const blogsRouter = require("express").Router()
const Blog = require("../models/blog")

const dummy = require("../utils/list_helper")

blogsRouter.get("/", (request, response) => {
	console.log("in app duimmy: ", dummy.dummy([{ "msg": "le fu" },{}]))
	Blog
		.find({})
		.then(blogs => {
			response.json(blogs)
		})
})

blogsRouter.post("/", (request, response) => {

	console.log("requwsst body: ", request.body)

	const blog = new Blog(request.body)

	blog
		.save()
		.then(result => {
			response.status(201).json(result)
		})
})

module.exports = blogsRouter