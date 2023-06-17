const baseUrl = 'https://jsonplaceholder.typicode.com'

export const sendApiRequest = (path) => {
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