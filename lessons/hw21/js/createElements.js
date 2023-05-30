const productArticul = document.createElement('div')
const productName = document.createElement('div')
const productDescription = document.createElement('div')
const buy = document.createElement('button')

const createCategory = (category) => {
    const categoriesRootDiv = document.querySelector('#categories_block')
    const categoryItem = document.createElement('div')
    categoryItem.classList.add('category_item', 'items')
    categoryItem.innerText = category
    categoriesRootDiv.appendChild(categoryItem)
}

const createProduct = (productTitle) => {
    const productListRootDiv = document.querySelector('#product_list_block')
    const productItem = document.createElement('div')
    productItem.classList.add('product_item', 'items')
    productItem.innerText = productTitle
    productListRootDiv.appendChild(productItem)
}

const createProductInfo = (dataStoreObj) => {
    const productRootDiv = document.querySelector('#product_info_block')

    productArticul.classList.add('product_info_articul', 'product_information')
    productArticul.innerText = dataStoreObj.id

    productName.classList.add('product_info_name', 'product_information')
    productName.innerText = dataStoreObj.title

    productDescription.classList.add('product_info_description', 'product_information')
    productDescription.innerText = dataStoreObj.description

    buy.classList.add('buy_product')
    buy.innerText = "Buy"

    productRootDiv.appendChild(productArticul)
    productRootDiv.appendChild(productName)
    productRootDiv.appendChild(productDescription)
    productRootDiv.appendChild(buy)
}

const deleteProductInfo = () => {
    const productRootDiv = document.querySelector('#product_info_block');
    productRootDiv.removeChild(productArticul);
    productRootDiv.removeChild(productName);
    productRootDiv.removeChild(productDescription);
    productRootDiv.removeChild(buy);

    document.querySelectorAll('.product_item').forEach(item => item.remove())

    const categories = document.querySelector('#categories_block')
    const cat = document.querySelectorAll('.category_item')
    cat.forEach(item => categories.removeChild(item))
};

const removeEventListeners = () => {
    const getCategories = document.querySelectorAll('.category_item');
    getCategories.forEach(category => {
        category.removeEventListener('click', populateProductList);
    });

    const allProducts = document.querySelectorAll('.product_item');
    allProducts.forEach(product => {
        product.removeEventListener('click', populateProductInfo);
    });

    const btnBuy = document.querySelector('.buy_product');
    btnBuy.removeEventListener('click', buyProduct);
};