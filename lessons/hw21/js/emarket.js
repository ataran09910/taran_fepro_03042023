let cart = []

const populateCategories = () => {
	[...new Set(dataStore.map(item => item.category))].forEach(item => createCategory(item))
}

const populateProductList = () => {
	const getCategories = document.querySelectorAll('.category_item')
	getCategories.forEach(category => {
		category.addEventListener('click', event => {
			const selectedCategory = dataStore.filter(item => item.category === event.currentTarget.innerText)
			selectedCategory.forEach(item => createProduct(item.title))
			event.currentTarget.hidden = true
		})
	})
}

const populateProductInfo = () => {
	const allProducts = document.querySelectorAll('.product_item')
	allProducts.forEach(product => {
		product.addEventListener('click', event => {
			const selectedProduct = dataStore.find(item => item.title === event.currentTarget.innerText)
			cart = selectedProduct
			createProductInfo(selectedProduct)
		})
	})
}

const buyProduct = () => {
	const btnBuy = document.querySelector('.buy_product')
	btnBuy.addEventListener('click', function() {
		alert('Okay.' + JSON.stringify(cart))
		runtume()
	})
}

function runtume() {
	cart = []

	document.addEventListener('DOMContentLoaded', event => {
		populateCategories()
	})

	document.addEventListener('click', event => {
		populateProductList()
		populateProductInfo()
		buyProduct()
	})

	deleteProductInfo()
	removeEventListeners()
	populateCategories()
}

(function () {
	runtume()
})();

