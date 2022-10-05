document.querySelector("#submit").addEventListener("click",sign)
  let arr = JSON.parse(localStorage.getItem("user")) || []
  function sign(){
   let name = document.querySelector("#name").value
  
   let email =  document.querySelector("#email").value
  
   let adres = document.querySelector("#address").value

   let amnt =  document.querySelector("#amount").value


  
  
   let data = new heros(name,email,adres,amnt)
  
   arr.push(data)
  
   localStorage.setItem("user",JSON.stringify(arr))
  
  
  
  }
  function heros(name,email,adres,amnt){
  this.name  = name
  this.email = email
  this.adres = adres
  this.amnt = amnt
  
  }
