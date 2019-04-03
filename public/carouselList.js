var React     = require('react');
var Carousel = require('./carousel');

class CarouselList extends React.Component {
    
                constructor() {
                  super();
                  this.handleClick = this.handleClick.bind(this);
                }
    
                handleClick(target) {
                  this.props.handleClickHome(target);
                }
    
                render() {
    
                  var data = [
                    {target: "slide1",  imageName:"slide1_bg" },
                    {target: "slide2",  imageName:"slide2_bg" },
                    {target: "slide3",  imageName:"slide3_bg" },
                  ];
    
                  var carousels = [];
                  var classActiveValue;
                  for(var i=0; i<data.length;i++){
                    if(data[i].target == this.props.currentTarget){
                      classActiveValue = "flex-active-slide";
                    } else {
                      classActiveValue = null;
                    }
                    carousels.push(<Carousel handleClickCarouselList={this.handleClick} target={data[i].target} classActive={classActiveValue} imageName={data[i].imageName}/>);
                  }
                  return (
                      <div id="carousel">
                      <ul className="slides">
                          {carousels}
                      </ul>
                  </div>
                  );
                }
            }

            module.exports = CarouselList;