//store the products array in localstorage as "data"
let arr=JSON.parse(localStorage.getItem("product_form"))|| [];
function Product_form(b,n,p,i){
    this.product_brand=b
    this.product_name=n
    this.product_price=p
    this.product_image=i
}

function myfun(event){
    event.preventDefault()
    let form =document.getElementById("product_form")
    let product_brand=form.product_brand.value
    let product_name=form.product_name.value
    let product_price=form.product_price.value
    let product_image=form.product_image.value

    let first =new Product_form(product_brand,product_name,product_price,product_image)
    arr.push(first)
    localStorage.setItem("product_form",JSON.stringify(arr))
}
document.querySelector("button").addEventListener("click",myFunction)
function myFunction(){
    window.location.href="inventory.html"
}