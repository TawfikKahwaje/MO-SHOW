/* START SOLUTION */
  class GuessMovie extends React.Component {

    constructor(props){
      super(props);
      this.state={
        img : '',
        title:''

      }
    }

    getMovie(e){ 
      

      var random=Math.floor(Math.random()*(this.props.movies.length-1));
      //console.log(this.props.movies[random]);
      var movie=this.props.movies[random];  

      this.setState({
        title:movie.original_title,
        img:movie.backdrop_path
      });



    }
    checkMovie(element){
      console.log(element.value)
      console.log(this.state.title);
      if(element.value.toLowerCase()===this.state.title.toLowerCase())
      {
        alert("good");
        document.getElementById("titleInput").value ="";

        this.getMovie();
      }

    }

    addChar(element){

        document.getElementById("titleInput").value += element.id;
        document.getElementById(element.id).value=''

      

    }

      render(){

        if(this.props.flag==='GuessMovie'){
        return (
          <div className="jumbotron" id='GuessMovie'>
            <button id='start' style={{width:'50%',backgroundColor:'#37c0fb'}} type="button" className=" center-block  btn-primary GuessButton" onClick={(e)=>{this.getMovie(e.target)}}>START</button>
            <img  className="img-responsive center-block GuessImg" src={`https://image.tmdb.org/t/p/w1000${this.state.img}`}></img>
            <div className=" jumbotron center-block" style={{width:'50%'}}>
              {_.shuffle(this.state.title.split('')).map((char) =>
                <button id={char} className=" center-block  btn-primary " onClick={(e)=>{this.addChar(e.target) }} style={{width:'50px',height:'50px', display:'inline',backgroundColor:'#37c0fb'}} type='button' value={char}> {char}</button>
              )}

            </div>
            <input  onChange={(e)=>{this.checkMovie(e.target)}} className='center-block' id='titleInput' style={{width:'50%'}} type="text" placeholder="enter the Name"  />

          </div>
        )}
      else
        return <div></div>
    }


  
    
};
/* ELSE
console.log(this.flag);
      if(this.flag==='GuessMovie'){
        var used=[];
        var random=Math.floor(Math.random()*(this.movies.length-1));
        console.log(random)



        {movies.map((movie) =>
          <MovieListEntry
            movie={movie}
          />
        )}
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
GuessMovie .propTypes = {
  movies: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.GuessMovie  = GuessMovie ;
