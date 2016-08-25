var searchGuessMovie = (id, callback) => {

  var request = new XMLHttpRequest();
  request.open('GET', 'http://api.themoviedb.org/3/movie/'+id+'?api_key=96b8e674b4a3b7c951de7c1ecfb0e230');


  request.setRequestHeader('Accept', 'application/json');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log(JSON.parse(this.responseText).results)
      callback(JSON.parse(this.responseText));
    }
  };

  request.send();
}

window.searchGuessMovie = searchGuessMovie;
