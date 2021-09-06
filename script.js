function openJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


var seturl = "https://api.artic.edu/api/v1/artworks/?fields=id,title,image_id,artist_display,date_display&limit=1&page=" + Math.floor(Math.random() * 1500)

openJSON(seturl, function(text){
    var data = JSON.parse(text);
    console.log(data)
    var artistData = data.data[0].artist_display
    document.getElementById('title').innerHTML = data.data[0].title;
    document.getElementById('date').innerHTML = data.data[0].date_display;
    document.getElementById('link').href = "https://www.artic.edu/artworks/" + data.data[0].id + "/?art.rickard.co"
    document.getElementById('name').innerHTML = artistData.replace("\n", "<br><span class='alt'>");
    document.getElementById('image').src = "https://www.artic.edu/iiif/2/" + data.data[0].image_id + "/full/843,/0/default.jpg";
    document.getElementById('image').style.display = "block"
});
