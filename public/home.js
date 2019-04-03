var React     = require('react');

var SliderList = require('./sliderList');
var CarouselList = require('./carouselList');

class Home extends React.Component {
    
             constructor() {
               super();
               this.handleClick = this.handleClick.bind(this);
               this.state = {currentTarget : "slide3"};
    
             }
    
             handleClick(target){
               this.setState({
                 currentTarget: target
               });
             }
    
             render() {
               return (
                <section id="home" className="padbot0">
                    <SliderList currentTarget={this.state.currentTarget}/>
                    <CarouselList currentTarget={this.state.currentTarget} handleClickHome={this.handleClick}/>
                </section>
               );
             }
            }

            module.exports = Home;
    