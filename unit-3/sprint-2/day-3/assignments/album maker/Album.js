
function storeImage(){
    let url = document.getElementById('url').value;

    let img = JSON.parse(localStorage.getItem('images')) || []

    img.push(url)

    localStorage.setItem('images',JSON.stringify(img))
}