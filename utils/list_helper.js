// const blogModel = require("../models/blog")

const dummy = (blogs) => {
	// console.log("dummy action: ", blogs)

	return 1
}

const totalLikes = (blogs) => {
	// console.log("totallikes action: ", blogs.length)

	if (blogs.length === 0 ) {
		// console.log("totalLikes, when blogs is 0 should be: 0")
		return 0
	}
	else if (blogs.length === 1) {
		// console.log("total lenght 1, first blog only: ", blogs[0].likes)
		return blogs[0].likes
	}
	const totalCount = blogs.reduce( (total, blog) => {
		// console.log("in reducer total: ", total)
		return total + blog.likes
	}, 0)

	return totalCount

}

const favoriteBlog = (blogs) => {
	const favoriteBlog = blogs.reduce( (fav, blog) => {
		// console.log("in reducer fav: ", fav)
		if (fav === 0){
			// console.log("replacing")
			fav = blog
		}

		if (blog.likes > fav.likes){
			fav = blog
		}

		return fav
	}, 0)

	return favoriteBlog
}

module.exports = {
	dummy, totalLikes, favoriteBlog
}