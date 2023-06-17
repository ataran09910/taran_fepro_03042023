import { sendApiRequest } from "./apiClient.js"

let postObject = {}

const getPostById = (posts, id) => Array.from(JSON.parse(posts)).find(post => post.id === id)
const getCommentsByPostId = (comments, postId) => Array.from(JSON.parse(comments)).filter(comment => comment.postId === postId)

const findPost = () => {
	const inputElement = document.querySelector('.postId')
	const errorElement = document.querySelector('.postContent .error')
	const input = Number(inputElement.value)

	if (!input) {
		const errMsg = 'Input value should be a number'
		errorElement.textContent = errMsg
		throw new Error(errMsg)
	}

	sendApiRequest('/posts', input)
		.then((posts) => {
			const postContentFromResponse = getPostById(posts, input)
			if (!postContentFromResponse) {
				const errMsg = `Post with id: "${input}" not found`
				errorElement.textContent = errMsg
				return Promise.reject(new Error(errMsg))
			}
			errorElement.textContent = ''
			populatePostData(postContentFromResponse)
			postObject = postContentFromResponse
		})
		.catch((error) => console.log(error))
}

const findPostBtn = document.querySelector('.find')
findPostBtn.addEventListener('click', findPost)

const populatePostData = (postDataObject) => {
	const id = document.querySelector('.post .id')
	const userId = document.querySelector('.post .userId')
	const title = document.querySelector('.post .title')
	const postBody = document.querySelector('.post .postBody')

	id.innerText = `ID: ${postDataObject.id}`
	userId.innerText = `UserID: ${postDataObject.userId}`
	title.innerText = `Title: ${postDataObject.title}`
	postBody.innerText = `Body: ${postDataObject.body}`
}

const showComments = () => {
	const postId = postObject.id

	sendApiRequest('/comments', postId)
		.then((comments) => {
			const allCommentsContent = getCommentsByPostId(comments, postId)
			const commentListParent = document.querySelector('.commentsList')

			allCommentsContent.forEach(comment => {
				const li = document.createElement('li')
				li.innerText = `FROM: ${comment.email}. BODY: ${comment.body}`
				commentListParent.appendChild(li)
			})
		})
		.catch((error) => console.log(error))
}

const showCommentsBtn = document.querySelector('.showComments')
showCommentsBtn.addEventListener('click', showComments)

