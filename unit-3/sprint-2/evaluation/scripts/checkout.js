/*
Alerts 
0 seconds : Your order is accepted 
3 seconds : Your order is being Packed 
8 seconds : Your order is in transit  
10 seconds : Your order is out for delivery 
12 seconds : Order delivered
*/
document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    function submit (){
        setTimeout(function(){
        alert("Your order is accepted ")
    },00000);
    setTimeout(function(){
        alert("Your order is being Packed")
    },3000);
    setTimeout(function() {
        alert("Your order is in transit")
    },8000);
    setTimeout(function() {
        alert("Your order is out for delivery")
    },10000);
    setTimeout(function() {
        alert("Order delivered")
    },12000);

}