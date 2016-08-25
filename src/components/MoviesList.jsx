/* START SOLUTION */
var MoviesList  = ({movies,flag}) => {
    
    if(flag==='MoviesList'){
      return(
        <div className="jumbotron" id='MoviesList'>
        {movies.map((movie) =>
          <MovieListEntry
            movie={movie}
          />
        )}
      </div>

        )
    }

    return <div></div>
    
};
/* ELSE
var VideoList = () => (
  <div className="video-list media">
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
  </div>
);
END SOLUTION*/

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MoviesList .propTypes = {
  movies: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.MoviesList  = MoviesList ;
