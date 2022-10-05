// Write code related to dashboard page here
let count=0;
let arr=JSON.parse(localStorage.getItem("task-list"))||[];
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
        let td6=document.createElement("td")
        td6.innerText="Add";
        td6.style.backgroundColor="red";

        td6.addEventListener("click",myDel)

        function myDel(event){
            event.target.parentNode.remove()
            localStorage.setItem("priority-list",JSON.stringify(arr))
        }
        tr.append(td1,td2,td3,td4,td5,td6)

        count++;
        document.querySelector("tbody").append(tr)

        document.querySelector("task-count").innerText=count;


    })
}