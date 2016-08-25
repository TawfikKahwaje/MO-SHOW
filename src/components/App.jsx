class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
	      movies: [],
	      flag:'MoviesList'


	    };

	}
	componentDidMount() {
    	this.getMovies({sort_by:'popularity.desc',
    					genre :'discover/movie',
    					query:''},'slider');
  	}

	getMovies(options,flag) {
		this.setState({
			flag:flag
		})
		if(! options.method){
			this.props.searchMovies(options, (movies) =>
		    this.setState({
		      movies: movies,
		    })
		  );
		}
	}

	checkFlag(flag){
		this.setState({
			flag:flag
		})
	}




	render (){
		return (
			<div>
				<Header getMovies={this.getMovies.bind(this)}  />
				<Slider movies={this.state.movies} flag={this.state.flag} />
				<MoviesList movies={this.state.movies} flag={this.state.flag}/>
				<GuessMovie movies={this.state.movies} flag={this.state.flag}/>
			</div>
			)

	}
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
