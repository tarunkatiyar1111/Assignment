let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"
fetch(url).then(function(res){
   return res.json();
})
.then(function(jsonData){
    console.log(jsonData[0].vouchers)
   products(jsonData[0].vouchers)
})
function products(data){

data.forEach(function(elem){

  let div = document.createElement("div")

  let img = document.createElement("img")
  img.src = elem.image

  let name = document.createElement("h3")
  name.innerText = elem.name

  let price = document.createElement("h3")
  price.innerText = elem.price

  let btn = document.createElement("button")
  btn.innerText = "buy_voucher"

  btn.addEventListener("click",function(){

    addtocart(elem)
    window.location.reload()
  })

  div.append(img,name,price,btn)
  document.querySelector("#voucher_list").append(div)

})

}
let arr = JSON.parse(localStorage.getItem("purchase")) ||  []

function addtovaucher(elem){

  arr.push(elem)
  localStorage.setItem("purchase",JSON.stringify(arr))
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
}
}
