import { dataStore } from './dataStore.js'
import { clearOrderForm, populateOrderDetails } from './order.js'
import { disableElement, makePageElementNotVisible, makePageElementVisible } from './utils.js'
import { validateForm } from './validation.js'

let cart = []

const productArticul = document.createElement('div')
const productName = document.createElement('div')
const productDescription = document.createElement('div')
const buyProductButton = document.createElement('button')
const acceptAndContinueButton = document.createElement('button')
const deliveryDetails = document.querySelector('.delivery_form_container')
const orderDetails = document.querySelector('.order_summary_container')

const createCategory = (category) => {
	const categoriesRootDiv = document.querySelector('#categories_block')
	const categoryItem = document.createElement('div')
	categoryItem.classList.add('category_item', 'items')
	categoryItem.innerText = category
	categoriesRootDiv.appendChild(categoryItem)
	categoryItem.addEventListener('click', populateProductList)
}

const createProduct = (productTitle) => {
	const productListRootDiv = document.querySelector('#product_list_block')
	const productItem = document.createElement('div')
	productItem.classList.add('product_item', 'items')
	productItem.innerText = productTitle
	productListRootDiv.appendChild(productItem)
	productItem.addEventListener('click', populateProductInfo)
}

const createProductInfo = (dataStoreObj) => {
	const productRootDiv = document.querySelector('#product_info_block')

	productArticul.classList.add('product_info_articul', 'product_information')
	productArticul.innerText = dataStoreObj.id

	productName.classList.add('product_info_name', 'product_information')
	productName.innerText = dataStoreObj.title

	productDescription.classList.add('product_info_description', 'product_information')
	productDescription.innerText = dataStoreObj.description

	buyProductButton.classList.add('buy_product', 'product_information')
	buyProductButton.innerText = "Add to Basket"

	productRootDiv.appendChild(productArticul)
	productRootDiv.appendChild(productName)
	productRootDiv.appendChild(productDescription)
	productRootDiv.appendChild(buyProductButton)
	buyProductButton.addEventListener('click', buyProduct)
}

function deleteProductInfo() {
	document.querySelectorAll('.category_item').forEach(item => item.remove())
	document.querySelectorAll('.product_item').forEach(item => item.remove())
	document.querySelectorAll('.product_information').forEach(item => item.remove())
	clearOrderForm()
	makePageElementNotVisible(deliveryDetails)
	makePageElementNotVisible(orderDetails)
}

const populateCategories = () => {
	[...new Set(dataStore.map(item => item.category))].forEach(item => createCategory(item))
}

const populateProductList = (event) => {
	const selectedCategory = dataStore.filter(item => item.category === event.currentTarget.innerText)
	selectedCategory.filter(item => createProduct(item.title))
	disableElement(event.currentTarget)
}

const populateProductInfo = (event) => {
	const selectedProduct = dataStore.find(item => item.title === event.currentTarget.innerText)
	cart = selectedProduct
	createProductInfo(selectedProduct)
}

const buyProduct = () => {
	console.log('Product added to cart', JSON.stringify(cart))
	makePageElementVisible(deliveryDetails)
}

const sendDeliveryData = formElement => {
	return Array.from(formElement.elements)
		.filter(element => element.type !== 'submit' && !(element.type === 'radio' && !element.checked))
		.reduce((data, element) => ({ ...data, [element.name]: element.value }), {})
}

function runtimeSession() {
	cart = []
	deleteProductInfo()
	populateCategories()

	validateForm('.delivery_form')
		.then((formBlock) => {
			const deliveryDataObject = sendDeliveryData(formBlock)
			console.log('Delivery object model: ', deliveryDataObject)
			return Promise.resolve(deliveryDataObject)
		})
		.then((deliveryDataObject) => populateOrderDetails(deliveryDataObject, cart))
		.then(() => makePageElementVisible(orderDetails))
		.then(() => {
			const reloadTimeout = 10000
			console.log(`Promise chain resolved. Starting session again in ${reloadTimeout} seconds...`)
			setTimeout(() => runtimeSession(), reloadTimeout);
		})
		.catch(error => console.error('Promise chain error:', error))
}

runtimeSession()
