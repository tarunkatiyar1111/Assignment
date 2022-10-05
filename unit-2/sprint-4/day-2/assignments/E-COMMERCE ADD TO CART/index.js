<script>
let arr = [a1,a2,a3,a4,a5];
let arr1=arr.filter(function(el){
    return el != "a3";
})
arr=arr1;
console.log(arr);