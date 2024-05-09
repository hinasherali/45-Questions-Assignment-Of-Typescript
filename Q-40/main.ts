/////////////////////////////////////////////////////////////////////////////////////
//Album: Write a function called make_album() that builds a Object describing a 
//music album. The function should take in an artist name and an album title, and 
//it should return a Object containing these two pieces of information. Use the 
//function to make three dictionaries representing different albums. Print each 
//return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of 
//tracks on an album. If the calling line includes a value for the number of tracks, 
//add that value to the album’s Object. Make at least one new function call that 
//includes the number of tracks on an album.
////////////////////////////////////////////////////////////////////////////////

function make_album(artist_name: String, album_title: String, tracks?: Number){
    let album: {artist: String, title: String, tracks?: Number} = {
        artist: artist_name,
        title: album_title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }

return album;

}
let album1 = make_album("Ali zafar","Album title 1 jugnoo");

let album2 = make_album("Ali Haider","Album Title 2 Purani Jeans");

let album3 = make_album("Sonu nigam","Album Title 4 khwaab", 30);

console.log(album1.artist)
console.log(album2.artist)
console.log(album3.artist)

