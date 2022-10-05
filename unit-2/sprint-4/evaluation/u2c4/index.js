// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit",admission)
let stdArr=JSON.parse(localStorage.getItem("stdData"))||[]
function admission(){
    event.preventDefault();
    let stdObj={
        stdName:document.querySelector("#name").ariaValueMax,
        stdEmail:document.querySelector("#email").ariaValueMax,
        stdCourse:document.querySelector("#course").ariaValueMax,
        stdGender:document.querySelector("#gender").ariaValueMax,
        stdPhone:document.querySelector("#phone").ariaValueMax,
    }
    stdArr.push(stdObj);
    localStorage.setItem("stdData",JSON.stringify(stdArr));
}
