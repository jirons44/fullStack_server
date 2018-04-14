// just a test file for asyncAwait.....
// javascript 'fetch' in standard library introduced in es2015....to make ajax calls

// https://rallycoding.herokuapp.com/api/music_albums


/*
  copy this to chrome in developer tools and run this in the console.

 */

function fetchAlbums() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')  // returns a promise
        .then(res => res.json())                                 // returns a promise
        .then(json => console.log(json));
}

fetchAlbums();

//new ES2017  - copy into browser console and run
// also, babeljs.io...try it tab....paste and see crazy es 2015 code

const fetchAlbums2 = async () => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();

    console.log(json);
}

fetchAlbums2();


