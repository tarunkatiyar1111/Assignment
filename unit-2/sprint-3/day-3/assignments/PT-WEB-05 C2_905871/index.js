// fill in javascript code here
document.querySelector("form").addEventListener("submit",myFunction)
 
function myFunction(event) {
    event.preventDefault()
    let Name = document.querySelector("#name").value
    let DoctorID = document.querySelector("#docID").value
    let Specialization = document.querySelector("#dept").value
    let Experience = document.querySelector("#exp").value
    let EmailAddress = document.querySelector("#email").value
    let MobileNumber = document.querySelector("#mbl").value
    let Role = document.querySelector("#role").value
    
    
  
    let tr = document.createElement("tr")
    
    
    let td1=document.createElement("td")
    td1.innerText=Name
    let td2=document.createElement("td")
    td2.innerText=DoctorID
    let td3=document.createElement("td")
    td3.innerText=Specialization
    let td4=document.createElement("td")
    td4.innerText=Experience
    let td5=document.createElement("td")
    td5.innerText=EmailAddress
    let td6=document.createElement("td")
    td6.innerText=MobileNumber
    let td7=document.createElement("td")
    td7.innerText=Role
    
    let td8=document.createElement("td")
    td8.innerText="delete"
    td8.style.backgroundColor="red"
    td8.addEventListener("click",Tarun)
    function Tarun(event){
    event.target.parentNode.remove()
    }
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr)
}

    
    

    
    

    
  




