/* START SOLUTION */
var Slider  = ({movies,flag}) => {
    //console.log(flag);
    if(flag==='slider'){
      return (
        <section id="banner" >
          <header>
            <h2>MO/SH  <em>All about Movies , TV/Show </em></h2>
          </header>
        </section>)
    }
    else
      return <div id='ads'></div>
    
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
Slider .propTypes = {
  movies: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.Slider  = Slider ;
