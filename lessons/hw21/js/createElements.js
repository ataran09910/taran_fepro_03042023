const productArticul = document.createElement('div')
const productName = document.createElement('div')
const productDescription = document.createElement('div')
const buyProductButton = document.createElement('button')

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
    buyProductButton.innerText = "Buy"

    productRootDiv.appendChild(productArticul)
    productRootDiv.appendChild(productName)
    productRootDiv.appendChild(productDescription)
    productRootDiv.appendChild(buyProductButton)
    buyProductButton.addEventListener('click', buyProduct)
}

function deleteProductInfo () {
    document.querySelectorAll('.category_item').forEach(item => item.remove())
    document.querySelectorAll('.product_item').forEach(item => item.remove())
    document.querySelectorAll('.product_information').forEach(item => item.remove())
};