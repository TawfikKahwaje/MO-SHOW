class MovieListEntry extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" 
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.movie.poster_path}`} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" >{this.props.movie.title ? this.props.movie.title : this.props.movie.name}</div>
          <div className="video-list-entry-detail">{this.props.movie.overview}</div>
        </div>
      </div>
      )
  }
};

/* ELSE

var MovieListEntry = ({video, handleVideoListEntryTitleClick}) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div 
        className="video-list-entry-title"
        onClick={() => handleVideoListEntryTitleClick(video)}
      >
        {video.snippet.title}
      </div>
      <div className="video-list-entry-detail">{video.snippet.description}</div>
    </div>
  </div>
);

END SOLUTION */

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MovieListEntry = MovieListEntry;
