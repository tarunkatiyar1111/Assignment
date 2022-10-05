let ite=JSON.parse(localStorage.getItem("items"))||[]
function productadd(arr){
    let total=0
    arr.forEach(function(elem,i){
        let div=documet.creatElement("div")

        let img=document.createElement("img")
        img.src=elem.image

        let name=document.createElement("h3")
        name.innerText=elem.title

        let price=document.createElement("h3")
        price.innerText=elem.price

        total=total+elem.price
        document.querySelector("#cart_total").innerText="total"

        let btn=document.createElement("button")
        btn.innerText="Remove"
        btn.setAttribute("class","remove")
        btn.addEventListener("click",function(){
            remove(elem,i)
        })
        div.append(img,name,price,btn)
        document.querySelector("#cart").append(div)
    })
}
function removepro(elem,i){
    arr.splice(i,1)
    localStorage.setItem("items",JSON.stringify(arr))
    window.location.reload()
}