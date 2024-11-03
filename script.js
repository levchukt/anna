async function getProducts(){
    let response = await fetch("items.json")
    let products = await response.json()
    return products
}
async function getProductsWomen(){
    let response = await fetch("women.json")
    let products = await response.json()
    return products
}

function getCardHTML (product){
    let productData = JSON.stringify(product)
    return`
    <div class="one_item">
            <img src="img/${product.image}" alt="">
            <p class="name">${product.title}</p>
            <p class="price">${product.price}</p>
            <a href="" class="buy">Buy</a>
        </div>
    `
}

function buyitem(){
    return "hjgfhj"
}

getProducts().then(function(products){
    let productsList = document.querySelector('.items_men')
    if (productsList){
       products.forEach(product =>{
        productsList.innerHTML += getCardHTML(product)
       })
    }
    let buyButtons = document.querySelectorAll('.buy')
    if ( buyButtons ){
        buyButtons.forEach(button =>{
            button.addEventListener('click', buyitem) 
        })
            
        }
    }
)

getProductsWomen().then(function(products){
    let productsList = document.querySelector('.items_women')
    if (productsList){
       products.forEach(product =>{
        productsList.innerHTML += getCardHTML(product)
       })
    }
    let buyButtons = document.querySelectorAll('.buy')
    if ( buyButtons ){
        buyButtons.forEach(button =>{
            button.addEventListener('click', buyitem) 
        })
            
        }
    }
)

function searchProducts(event){
    event.preventDefault()

    let field = document.querySelector('.search_field')
    let query = field.value.toLowerCase()
    let productsList = document.querySelector('.items')
    productsList.innerHTML=''

    getProducts().then(function(products){
        let productsList = document.querySelector('.items')
        products.forEach(product =>{
            if (product.title.toLowerCase().includes(query)){
                productsList.innerHTML += getCardHTML(product)
            }
        })
        let buyButtons = document.querySelectorAll('.buy')
        if ( buyButtons){
            buyButtons.forEach(button =>{
                button.addEventListener('click', buyItem)
            })
        }
})
}

let searchForm = document.querySelector('.search')
searchForm.addEventListener('submit',searchProducts)
let searchBtn = document.querySelector('.search_btn')
searchBtn.addEventListener('click', searchProducts)


let revCnt = document.querySelector('.rev_cnt')
let revInput = document.querySelector('.rev_input')
let revBtn = document.querySelector('.rev_btn')

revBtn.addEventListener('click', function(){
    let revInput = document.querySelector('.rev_input')

    let text = revInput.value
    console.log(text)
    if (text != '' ){
        revCnt.innerHTML += `
        <div class="review">
        <img src="img/user.png" alt="">
        <p class="review_text">${text}</p>
    </div>
        `
    }
})
