const deliveryFormObject = {
    articulElement: document.querySelector('.articul'),
    categorylElement: document.querySelector('.category'),
    titleElement: document.querySelector('.title'),
    descriptionElement: document.querySelector('.description'),
    quantityElement: document.querySelector('.quantity_order'),
    fnameElement: document.querySelector('.f_name'),
    lnameElement: document.querySelector('.l_name'),
    mnameElement: document.querySelector('.m_name'),
    cityElement: document.querySelector('.city'),
    paymentElement: document.querySelector('.payment'),
    commentsElement: document.querySelector('.comments_order'),
}

export const populateOrderDetails = (deliveryDataObject, cartObject) => {
    deliveryFormObject.articulElement.textContent = cartObject.id
    deliveryFormObject.categorylElement.textContent = cartObject.category
    deliveryFormObject.titleElement.textContent = cartObject.title
    deliveryFormObject.descriptionElement.textContent = cartObject.description
    deliveryFormObject.quantityElement.textContent = deliveryDataObject.quantity_of
    deliveryFormObject.fnameElement.textContent = deliveryDataObject.f_name
    deliveryFormObject.lnameElement.textContent = deliveryDataObject.l_name
    deliveryFormObject.mnameElement.textContent = deliveryDataObject.m_name
    deliveryFormObject.cityElement.textContent = deliveryDataObject.city
    deliveryFormObject.paymentElement.textContent = deliveryDataObject.payment_method
    deliveryFormObject.commentsElement.textContent = deliveryDataObject.comments
}

export const clearOrderForm = () => {
    for (const item in deliveryFormObject) {
        deliveryFormObject[item].textContent = '';
    }
}