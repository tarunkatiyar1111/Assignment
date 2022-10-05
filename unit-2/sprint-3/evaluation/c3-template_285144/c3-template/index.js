// Write all the Javascript here
document.querySelector("form").addEventListener("submit",myFunction);
console.log("hello");
function myFunction(event){
    event.preventDefault()
    let ProductName=document.querySelector("#name").value;
    let Catagory=document.querySelector("#category").value;
    let Brand=document.querySelector("#brand").value;
    let Price=document.querySelector("#price").value;
    let DeliveredBy=document.querySelector("#deliveredBy").value;
    // let PriceSegment=document.querySelector("#pricesegment").value;

    let tr=document.createElement("tr")

    let td1=document.createElement("td");
    td1.innerText=ProductName;
    let td2=document.createElement("td");
    td2.innerText=Catagory;
    let td3=document.createElement("td");
    td3.innerText=Brand;
    let td4=document.createElement("td");
    td4.innerText=Price;
    let td5=document.createElement("td");
    td5.innerText=DeliveredBy;
    let td6=document.createElement("td");
    // let h1=document.getElementById("total-price");
    // console.log(h1.innerHTML);
    // h1.innerHtml=Price;
    if(Price>1000){
        td6.innerText="Expensive"
    }
    else{
        td6.innerText="Not-Expensive"
    }
    let td7 =document.createElement("td");
    td7.innerText="Delete";
    td7.style.backgroundColor="red"
    td7.addEventListener("click",Tarun)
    function Tarun(event){
        event.target.parentNode.remove();
    }
    tr.append(td1,td2,td3,td4,td5,td6,td7);
    document.querySelector("tbody").append(tr);
    

    
   
}
