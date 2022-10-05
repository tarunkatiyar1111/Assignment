
let data;

async function getData(){

    try{
       
        let res = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=8d6d9b99')
         
        data = await res.json();
        
        console.log(data)
        
        appendMovies(data)
        
        }

    catch(error){
        
        console.log(error)
    
        }
    } 
   
    getData();

// ==============================================================

    let container = document.getElementById('container');
            
    function appendMovies(data){
        
        //data---> array of object

        // container.innerHTML = null;

        data.forEach(function(element){
            
            let div = document.createElement('div');
            div.setAttribute('id','hero')
            
            let image = document.createElement('img');
            image.src = element.Poster;

            let title = document.createElement('p');
            title.innerText = element.Title;

            let year = document.createElement('p');
            year.innerText = element.y;

            div.append(image,title,year);

            container.append(div);
        });
    }

    
