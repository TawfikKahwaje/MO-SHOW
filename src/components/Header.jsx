/* START SOLUTION */
class Header extends React.Component {
  // var style={
  //   height: 10 ,
  //   width : 10 ,
  //   backgroundColor:"black"
  // };
  constructor(props) {
    super(props)

    this.state = {
        current1:'current',
        current2:'',
        current3:'',
        current4:''
      };

  }
  changeClassName(element){
    //$("#inputSearch").val('');
    //document.getElementById('inputSearch').innerHTML='';
    console.log(element)
    if(element.id==='a1'){
      this.setState({
        current1:'current',
        current2:'',
        current3:'',
        current4:''
      })
    }
    else if(element.id==='a2'){
      this.setState({
        current1:'',
        current2:'current',
        current3:'',
        current4:''
      })
    }
    else if(element.id==='a3') {
      this.setState({
        current1:'',
        current2:'',
        current3:'current',
        current4:''
      })
    }
    else{
      this.setState({
        current1:'',
        current2:'',
        current3:'',
        current4:'current'
      })
    }

  }

  searchInput(element){
    if(this.state.current1.length || this.state.current2.length )
      this.props.getMovies({query:element.value,genre:'search/movie'},'MoviesList')
    else if(this.state.current3.length)
      this.props.getMovies({query:element.value,genre:'search/tv'},'MoviesList')



  }


  render(){

  return(
    <div>
    <div id="header">
            <nav id="nav">
              <ul>
                <li className={this.state.current1} onClick={(e)=>{this.changeClassName(e.target)}}><a id='a1'onClick={ ()=> { this.props.getMovies({sort_by:'popularity.desc',genre:'discover/movie'},'slider') } }>MO/SHOW</a></li>
                <li className={this.state.current2} onClick={(e)=>{this.changeClassName(e.target)}}><a id='a2' onClick={ ()=> { this.props.getMovies({sort_by:'popularity.desc',genre:'discover/movie'},'MoviesList') } }>Movies</a></li>
                <li className={this.state.current3} onClick={(e)=>{this.changeClassName(e.target)}}><a id='a3' onClick={ ()=> { this.props.getMovies({sort_by:'popularity.desc',genre:'discover/tv'},'MoviesList') } }>TV/Show</a></li>
                <li className={this.state.current4} onClick={(e)=>{this.changeClassName(e.target)}}><a id='a4' onClick={ ()=> { this.props.getMovies({sort_by:'popularity.desc',genre:'discover/movie'},'GuessMovie') } }>Guess</a></li>
              </ul>
            </nav>
        </div>
        <span class="glyphicons glyphicons-search x1"></span>
        <input onChange={(e)=>{this.searchInput(e.target)}} id='inputSearch' className="searchInput"  type="text" placeholder="Search for a movie, tv show, person..."  />
        </div>

        //<input  type="text" placeholder="Search for a movie, tv show, person..." value="" />
    )
}

  
};
/* ELSE
    <div className="page-header">
      <div className="">
      <h1> Go movie </h1>
      <div>
        <h3 onClick={ ()=> { props.getMovies({sort_by:'popularity.desc',genre:'discover/movie'}) } }>Movies</h3>
        <h3 onClick={ ()=> { props.getMovies({sort_by:'popularity.desc',genre:'discover/tv'}) } }>TV/Show</h3>
        <h3 >People</h3>
      </div>
      </div>
    </div>


onClick={props.getMovies({sort_by:'popularity.asc'})}
var Nav = () => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search />
    </div>
  </nav>s
);
END SOLUTION */

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;
