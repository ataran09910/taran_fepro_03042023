const baseUrl = 'https://jsonplaceholder.typicode.com'
let postObject = {}

const sendApiRequest = (path) => {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest()
		request.open('GET', `${baseUrl}${path}`)
		request.onload = () => {
			if (request.status === 200) {
				resolve(request.response)
			} else {
				reject(new Error(`Failed to send request due to error ${request.status}`))
			}
		}
		request.send()
	})
}

const getPostById = (posts, id) => Array.from(JSON.parse(posts)).find(post => post.id === id)
const getCommentsByPostId = (comments, postId) => Array.from(JSON.parse(comments)).filter(comment => comment.postId === postId)

const findPost = () => {
	const inputElement = document.querySelector('.postId')
	const errorElement = document.querySelector('.postContent .error')
	const inputValue = Number(inputElement.value)

	if (!inputValue) {
		throw new Error('Input value should be a number')
	}

	sendApiRequest('/posts', inputValue)
		.then((posts) => {
			const postContentFromResponse = getPostById(posts, inputValue)
			if (!postContentFromResponse) {
				const errMsg = `Post with id: "${inputValue}" not found`
				errorElement.textContent = errMsg
				throw new Error(errMsg)
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
		})
		.catch((error) => console.log(error))
}

const showCommentsBtn = document.querySelector('.showComments')
showCommentsBtn.addEventListener('click', showComments)

