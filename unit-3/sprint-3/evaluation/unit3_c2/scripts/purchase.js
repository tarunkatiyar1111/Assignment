let data=JSON.parse(localStorage.getItem("purchase"))||[];
function append(data){
    let box=document.querySelector("#purchased_vouchers");
    box.innerHTML="";
    data.forEach(function(el){
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image;

        let p=document.createElement("p");
        p.innerText=el.price;

        div.append(img,p);
        box.append(div)
    })
        }
        append(data)