

async function getData(){

    let query = document.getElementById('query').value

    let url = `https://swapi.dev/api/people/?search=${query}`

    let res = await fetch(url);

    let data = await res.json();

    console.log(data)
    
    return data.results;

    //append(data.results)

}

function append(data){
    let container = document.getElementById('results')

    container.innerHTML = null;

    data.forEach(function(element){
        
        let p = document.createElement('p')
        p.innerText = element.name;

        container.append(p);
    })
}

//=================== debounce ======================

async function main(){

    let data = await getData();

    append(data);

}
 
    let id;

function debouncing(func, delay){
    
    if(id){
        clearTimeout()
    }
    
    id = setTimeout(function(){
        func();
    },delay)
}

