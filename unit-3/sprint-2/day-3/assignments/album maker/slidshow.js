

let counter = 0;

let id;

function start(){
    let images = JSON.parse(localStorage.getItem('images'))

    let container = document.getElementById('container')

    container.innerHTML = null;

    let img = document.createElement('img')
    
    img.src = images[counter];

    container.append(img);

    counter++;

    id = setInterval(function (){

        img.src = images[counter]

        container.append(img);
        
        if(counter === images.length){
            counter = 0;
        }
        counter++;
        
    },1000);
}

function pause(){
    clearInterval(id);
}