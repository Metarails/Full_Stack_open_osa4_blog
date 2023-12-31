// const blogModel = require("../models/blog")
const _ = require("lodash")

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

const mostBlogs = (blogs) => {
	// console.log("most blogs funktion: ", blogs)
	const countBlogsAuthor = _.countBy(blogs, _.iteratee("author"))
	// console.log("wwww: ", countBlogsAuthor )
	let theMost = 0
	_.forEach(countBlogsAuthor, (value, key) => {
		// console.log("for each loop with authors: key (name) and values: ", key, value)
		if (theMost === 0 ){
			theMost = { author : key, blogs : value }
		}
		
		if (value > theMost.blogs){
			theMost = { author : key, blogs : value }
		}
	})

	// console.log("the most wroten author: ", theMost)
	return theMost

}

const mostLikes = (blogs) => {

	// const groupedAuthors = _.groupBy(blogs, _.iteratee("authors"))
	// console.log("logs grouped by author: ", groupedAuthors)

	const likesBlog = blogs.reduce( (likes, blog) => {
		// console.log("in reducer likes: ", blog)
		// console.log("in reducer likes: ", blog.author)
		// console.log("keys in likes: ", Object.keys(likes))
		if ( Object.keys(likes).includes(blog.author)){
			// console.log("author found: ", blog.author)
			likes[blog.author] +=  blog.likes
		} else {
			likes[blog.author] = blog.likes
		}
		return likes
	}, {})

	// console.log("likesBlog:", likesBlog)
	let allLikes = []
	_.forEach(likesBlog, (value, key) => {
		allLikes.push({
			author: key,
			likes: value
		})
	})
	// console.log("likes: ", allLikes)
	// const sortedLikes = _.orderBy(allLikes, ["likes"], ["desc"])
	// console.log("most likes: ", sortedLikes[0])

	return _.orderBy(allLikes, ["likes"], ["desc"])[0]

}

module.exports = {
	dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}