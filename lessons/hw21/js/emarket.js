let cart = []

const populateCategories = () => {
	[...new Set(dataStore.map(item => item.category))].forEach(item => createCategory(item))
}

const populateProductList = (event) => {
	const selectedCategory = dataStore.filter(item => item.category === event.currentTarget.innerText)
	selectedCategory.filter(item => createProduct(item.title))
	event.currentTarget.hidden = true
}

const populateProductInfo = (event) => {
	const selectedProduct = dataStore.find(item => item.title === event.currentTarget.innerText)
	cart = selectedProduct
	createProductInfo(selectedProduct)
}

const buyProduct = () => {
	alert('Okay.' + JSON.stringify(cart))
	runtimeSession()
}

function runtimeSession() {
	cart = []
	deleteProductInfo()
	populateCategories()
	populateProductList()
	populateProductInfo()
	buyProduct()
}

runtimeSession()
