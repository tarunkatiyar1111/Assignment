
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=rrr&key=[AIzaSyBc54zJNWTA12HkqAvp1YHYvybUVz3v7F8] 

// trending videos url : https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=[YOUR_API_KEY]

let APIkey = 'AIzaSyBc54zJNWTA12HkqAvp1YHYvybUVz3v7F8';

let search = async () => {

try {

    let query = document.getElementById('query').value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${APIkey}`);

    let data = await res.json();

    let actual_data = data.items;

    append(actual_data)
   // console.log(actual_data)

} catch (err) {
    console.log(err)
}

}


let append = (data) => {
  
    let container = document.getElementById('container');

    container.innerHTML = null;

    data.map (({snippet, id}) => {
    
        let title = snippet.title;
        let channel = snippet.channelTitle;
        let video = snippet.thumbnails.high.url;
        let videoid = id.videoId

        let div = document.createElement('div');

        let image = document.createElement('img');
        image.src = video;

        let newchannel = document.createElement('h4');
        newchannel.innerText = channel;

        let newtitle = document.createElement('p');
        newtitle.innerText = title;

        let data = {
            snippet,
            videoid
        }

        div.onclick = () => {
            videoClicked(data);
        }
        
        div.append(image, newchannel, newtitle);

        container.append(div);

    })

}


videoClicked = (data) => {

    localStorage.setItem('clicked', JSON.stringify(data));

    window.location.href = 'video.html';

}