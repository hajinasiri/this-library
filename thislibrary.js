var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

printPlaylists: function() {
  result = {};
  for(i = 1; i < Object.keys(library.playlists).length + 1; i++){
    P = "p0" + i // creates a counter for reading all the elements inside the playlists
    input1 = this.playlists[P];
    result[P] = input1.name + " - " + input1.tracks.length + " tracks";
  }


  return result;
},

// console.log(printPlaylists(library));


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

printTracks: function () {
  result = {};
    for(i = 1; i < Object.keys(this.tracks).length + 1; i++){
      T = "t0" + i; // creates a counter for reading all the elements inside the tracks
      var obj = this.tracks[T];
      result[T] = obj.name + " by" + obj.artist + "(" + obj.album + ")";
    }
  return(result);

},
// console.log(printTracks(this));


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

printPlaylist: function (playlistId) {
  var result = {};
  for(i = 1; i < Object.keys(this.playlists).length + 1; i++){
    P = "p0" + i; // creating counter to find out what playlist we should work on
    if(this.playlists[P].id === playlistId){
      var Playlist = P;
      result[P] = this.playlists[P].name + " - " + this.playlists[P].tracks.length + " tracks";
      for(j=0; j < this.playlists[P].tracks.length; j++){
        trackname = this.playlists[P].tracks[j];
        result[trackname] = this.tracks[trackname].name + " by " + this.tracks[trackname].artist + "(" + this.tracks[trackname].album + ")";

      }
    }


  }
  return(result);

},
// console.log(printPlaylist("p01"));



// adds an existing track to an existing playlist

addTrackToPlaylist: function (trackId, playlistId) {
  var result = this;
  for(i = 1; i < Object.keys(this.playlists).length + 1; i++){
    P = "p0" + i;
    if(this.playlists[P].id === playlistId){
      var Playlist = P;
    }
  }
  for(i = 1; i < Object.keys(this.tracks).length + 1; i++){
    T = "t0" + i;// creating a counter to find out which track we should work on
    if(this.tracks[T].id === trackId){
      var Track = T;
    }

  }
  this.playlists[Playlist].tracks.push(Track);
  // return(result);
},
// console.log(addTrackToPlaylist("t03", "p01"));

// generates a unique id
// (use this for addTrack and addPlaylist)

uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},


// adds a track to the this

addTrack: function (name, artist, album) {
  var newname = "t" + uid();
  this.tracks[newname] = {"id" : newname, "name": name, "artist": artist, "album": album};
},
// console.log(addTrack("a", "b", "c"));

// adds a playlist to the this

addPlaylist: function (name) {
  this.playlists[name] ={"id": name, "name": " ", "tracks": []};
},
// console.log(addPlaylist("haha"));

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

printSearchResults: function(query) {

}

}
console.log(library.printPlaylist("p01"));