// The items should be stored in local storage with key :- “items”
// API :- https://grocery-mock-api.herokuapp.com/items
let url = "https://grocery-mock-api.herokuapp.com/items"

save()
async function save(){

  let res = await fetch(url)
  let data = await res.json()
  console.log(data.data)
  products(data.data)
}
function products(data){
data.forEach(function(elem){
  let div = document.createElement("div")
  div.setAttribute("class","item")

  let img = document.createElement("img")
  img.src = elem.image

  let name = document.createElement("h3")
  name.innerText = elem.title

  let price = document.createElement("h3")
  price.innerText = elem.price

  let btn = document.createElement("button")
  btn.innerText = "add to cart"
  btn.setAttribute("class","add_to_cart")

  btn.addEventListener("click",function(){

    addtocart(elem)
    window.location.reload()
  })

  div.append(img,name,price,btn)
  document.querySelector("#items").append(div)

})

}
let arr = JSON.parse(localStorage.getItem("items")) ||  []
function addtocart(elem){

  arr.push(elem)
  localStorage.setItem("items",JSON.stringify(arr))
}

nav()
function nav(){
let obj={}
for(let i=0;i<arr.length;i++){
  let x = arr[i]
  if(obj[x]===undefined){
    obj[x]=1
  }else {
    obj[x]++
  }
}
console.log(obj)
for(let i in obj){
  let one = document.createElement("h1")
one.innerText = obj[i]
document.querySelector("#item_count").append(one)

  
}
}