// Write code related to Done page here
let arr=JSON.parse(localStorage.getItem("done-list"))

data(arr)
function data(arr){
    arr.forEach(function(elem){
        let tr=document.createElement("tr")

        let td1=document.createElement("td")
        td1.innerText=elem.Task;
        
        let td2=document.createElement("td")
        td2.innerText=elem.Description;
        let td3=document.createElement("td")
        td3.innerText=elem.starting;
        let td4=document.createElement("td")
        td4.innerText=elem.ending;
        let td5=document.createElement("td")
        td5.innerText=elem. Priority;
        
        tr.append(td1,td2,td3,td4,td5,)

        document.querySelector("tbody").append(tr)


    })
} 