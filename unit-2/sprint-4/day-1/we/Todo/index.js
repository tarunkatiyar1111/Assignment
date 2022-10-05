document.querySelector("form").addEventListener("submit", todoApp)
let taskArr=JSON.parse(localStorage.getItem("todoList")) || [];
displayTable(taskArr);
function todoApp(event){
    event.preventDefault()
    // let taskName=document.querySelector("#task").value;
    // let priority=document.querySelector("#priority").value;
    // // console.log(taskName,priority);
    // let taskObj={
    //     task: taskName,
    //     prior:priority,
    // };
    let obj={
        taskName:document.querySelector("#task").value,
        tarun:document.querySelector("#priority").value
    }
    // console.log(obj);
    taskArr.push(obj);
    localStorage.setItem("todoList",JSON.stringify(taskArr));
    displayTable(taskArr);
}

function displayTable(taskArr){
    document.querySelector("tbody").innerHTML="";
    taskArr.forEach(function (elem,index){
        let row=document.createElement("tr");
        let col1=document.createElement("td");
        col1.innerText=elem.taskName;
        let col2=document.createElement("td");
        col2.innerText=elem.tarun;
        if(elem.prior=="High"){
        col2.style.backgroundColor="red";
    } else{
        col2.style.backgroundColor="green";
    }
    let col3=document.createElement("td");
    col3.innerText="Delete";
    col3.addEventListener("click",function(){
        deleteRow(elem,index);

    });
    col3.style.color="green";
    row.append(col1,col2,col3);
    document.querySelector("tbody").append(row);
});
}
function deleteRow(elem,index){
    console.log(taskArr);
    taskArr.splice(index,1);
    localStorage.setItem("todoList",JSON.stringify(taskArr));
    displayTable(taskArr);
}