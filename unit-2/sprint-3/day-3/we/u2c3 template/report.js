// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myFunction)
 
function myFunction(event) {
    event.preventDefault()
    let Avatar = document.querySelector("#image").value
    let Name = document.querySelector("#name").value
    let Batch = document.querySelector("#batch").value
    let Dsa = document.querySelector("#dsa").value
    let Skillathon = document.querySelector("#cs").value
    let Coding = document.querySelector("#coding").value
    console.log(Avatar,Name,Batch,Dsa,Skillathon,Coding)
  
    let tr = document.createElement("tr")
    
    let td1=document.createElement("td")
    let image=document.createElement("img")
    image.setAttribute("src", Avatar)
    td1.append(image)
    let td2=document.createElement("td")
    td2.innerText=Name
    let td3=document.createElement("td")
    td3.innerText=Batch
    let td4=document.createElement("td")
    td4.innerText=Dsa
    let td5=document.createElement("td")
    td5.innerText=Skillathon
    let td6=document.createElement("td")
    td6.innerText=Coding
    let obtained=Number(Dsa)+Number(Skillathon)+Number(Coding)
    let percentage=(obtained/30)*100
    let td7=document.createElement("td")
    td7.innerText=percentage
    let td8=document.createElement("td")
    if(percentage<=50){
        td8.innerText="Async"
        td8.style.backgroundColor="red"
    }
    else{
        td8.innerText="Regular"
        td8.style.backgroundColor="green"
    }
    let td9=document.createElement("td")
    td9.innerText="delete"
    td9.style.backgroundColor="red"

    td9.addEventListener("click",Tarun)
    function Tarun(event){
    event.target.parentNode.remove()
    // document.querySelector("tbody>tr").innerText=""
    }

    
    

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
    document.querySelector("tbody").append(tr)
}   