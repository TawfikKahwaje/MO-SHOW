var searchMovies = (options, callback) => {

  var request = new XMLHttpRequest();
  request.open('GET', 'http://api.themoviedb.org/3/'+options.genre+'?api_key=96b8e674b4a3b7c951de7c1ecfb0e230&sort_by='+options.sort_by+'&query='+options.query);


  request.setRequestHeader('Accept', 'application/json');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      var temp=this.responseText;
      var results=temp['results'];
      console.log(JSON.parse(this.responseText).results)
      callback(JSON.parse(this.responseText).results);
    }
  };

  request.send();
}

window.searchMovies = searchMovies;
