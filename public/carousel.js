var React     = require('react');

class Carousel extends React.Component {

                constructor() {
                  super();
                  this.handleClick = this.handleClick.bind(this);
                }

                handleClick(){
                  this.props.handleClickCarouselList(this.props.target);
                }

                render() {
                  return (
                      <li onClick={this.handleClick} data-target={this.props.target} className={this.props.classActive}><img src={'images/slider/'+this.props.imageName+'.jpg'} alt="" /></li>
                  );
                }
          }
          module.exports = Carousel;