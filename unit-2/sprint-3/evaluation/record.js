// fill in javascript code here
document.querySelector("form").addEventListener("submit",getScore)
let formTag=document.querySelector("form");
function getScore(event){
    event.preventDeafault();
}
let name=formTag.name.valueOf;
let EmployeeID=formTag.EmployeeId.value;
let department=formTag.Department.value;
let exp=formTag.exp.value;
let email=formTag.email.value;
let mbl=formTag.mbl.value;

tr=document.createElement("tr");
td1=document.createElement("td");
td1.innerText= Name;
td2=document.createElement("td");
td2.innerText=EmployeeID;
td3=document.createElement("td");
td3.innerText=department;
td4=document.createElement("td");
td4.innerText=Experience;
td5=document.createElement("td");
td5.innerText=email;
td6=document.createElement("td");
td6.innerText=mbl;
td7=document.createElement("td");
td7.innerText=role;
td8=document.createElement("td");
td8.innerText=Delete;

tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
document.querySelector("tbody").append(tr)
