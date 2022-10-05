// Write code related to Home page here 
let arr=[];
document.querySelector("form").addEventListener("submit",myFunc)
function myFunc(event){
    event.preventDefault()
    let obj={
       Task:document.querySelector("#name").value,
       Description:document.querySelector("#desc").value,
       starting:document.querySelector("#start").value,
       ending:document.querySelector("#end").value,
       Priority:document.querySelector("#priority").value,

    };
    arr.push(obj)
    localStorage.setItem("task-list",JSON.stringify(arr))
}