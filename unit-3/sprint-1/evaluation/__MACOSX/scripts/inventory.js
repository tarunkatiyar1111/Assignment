let dataArr=JSON.parse(localStorage.getItem("product_form")) || [];

displayData()
function displayData(){
    dataArr.forEach(function(elem,index){
        let tarun=document.createElement("div")
        let brand=document.createElement("h1")
        brand.innerText=elem.product_brand
        let name=document.createElement("h2")
        name.innerText=elem.product_name
        let price=document.createElement("h3")
        price.innerText=elem.product_price
        let image=document.createElement("img")
        image.setAttribute=("src",elem.product_image)
      
        let btn =document.createElement("button")
        btn.innerText="Remove"
        btn.style.backgroundColor="red"
        btn.style.color="white"
        btn.addEventListener("click",function(){
            myDel(elem,index)
        })
        tarun.append(brand,name,price,image,btn)
        document.querySelector("#products_data").append(tarun)
    })
}
function mydel(elem,index){
    dataArr.splice(index,1)
    localStorage.setItem("product_form",JSON.stringify(dataArr))
    window.location.reload()
}
