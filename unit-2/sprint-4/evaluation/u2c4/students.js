// All the Code for All Students Page Goes Here
let arrFromLS =JSON.parse(localStorage.getItem("studentData"));
let studentArr =JSON.parse(localStorage.getItem("studentData")) ||[];

displayTable(arrFromLS);
function displayTable(arrFromLS){
    arrFromLS.forEach(function(elem){
    let tr = document.createElement("tr");

    let td1=document.createElement("td");
    td1.innerText=elem.personName;
    
    let td2=document.createElement("td");
    td1.innerText=elem.personEmail;

    let td3=document.createElement("td");
    td1.innerText=elem.personCourse;

    let td4=document.createElement("td");
    td1.innerText=elem.personGender;

    let td5=document.createElement("td");
    td1.innerText=elem.personPhone;

    tr.append(td1,td2,td3,td4,td5);
    document.querySelector("tbody").append(tr);
    

});
}
