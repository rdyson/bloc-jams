 var whichAlbum = 0;

// Example Album
 var albumPicasso = {
     name: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { name: 'Blue', length: '4:26' },
         { name: 'Green', length: '3:14' },
         { name: 'Red', length: '5:01' },
         { name: 'Pink', length: '3:21'},
         { name: 'Magenta', length: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     name: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { name: 'Hello, Operator?', length: '1:01' },
         { name: 'Ring, ring, ring', length: '5:01' },
         { name: 'Fits in your pocket', length: '3:21'},
         { name: 'Can you hear me now?', length: '3:14' },
         { name: 'Wrong phone number', length: '2:15'}
     ]
 };

// A third example album
var albumBlocParty = {
    name: 'Silent Alarm',
    artist: 'Bloc Party',
    label: 'Atlantic',
    year: '2005',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/en/0/00/Silentalarmcover.jpg',
    songs: [
        { name: 'Like Eating Glass', length: '4:22' },
        { name: 'Helicopter', length: '3:40' },
        { name: 'Positive Tension', length: '3:55' },
        { name: 'Banquet', length: '3:21' },
        { name: 'Blue Light', length: '2:47' },
        { name: 'She\'s Hearing Voices', length: '3:29' },
        { name: 'This Modern Love', length: '4:25' },
        { name: 'Pioneers', length: '3:35' },
        { name: 'Price of Gas', length: '4:19' },
        { name: 'So Here We Are', length: '3:52' },
        { name: 'Luno', length: '3:57' },
        { name: 'Plans', length: '4:10' },
        { name: 'Compliments', length: '4:43' }
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
    
    var template =
        '<tr class="album-view-song-item">'
      + '   <td class="song-item-number">' + songNumber + '</td>'
      + '   <td class="song-item-title">' + songName + '</td>'
      + '   <td class="song-item-duraction">' + songLength + '</td>'
      + '</tr>'
      ;
    
    return template;
    
 };

 // #1
 var albumTitle = document.getElementsByClassName('album-view-title')[0];
 var albumArtist = document.getElementsByClassName('album-view-artist')[0];
 var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
 var albumImage = document.getElementsByClassName('album-cover-art')[0];
 var albumSongList = document.getElementsByClassName('album-view-song-list')[0];


 var setCurrentAlbum = function(album) {
 
     // #2
     albumTitle.firstChild.nodeValue = album.name;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = '';
 
     // #4
     for (i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
     }
 
 };
 
 window.onload = function() {
   
     setCurrentAlbum(albumBlocParty);

     var albums = [albumPicasso, albumMarconi, albumBlocParty];
     var index = 1;

     albumImage.addEventListener("click", function(event) {
        setCurrentAlbum(albums[index]);
        index++;
        if (index == albums.length) {
            index = 0;
        }
     });
     
 };