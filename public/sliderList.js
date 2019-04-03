var React     = require('react');
var Slider = require('./slider');

class SliderList extends React.Component {
    
                constructor() {
                super();
                }
    
                render() {
    
                const data = [
                    {classInfo1:"slide1", classInfo2:"title1 captionDelay2 FromTop", content1:"Lyon", content2:"vacances été", content3: "2017", content4: "Vacance au calme dans une petite maison de campagne"},
                    {classInfo1:"slide2", classInfo2:"title1 captionDelay6 FromLeft", content1:"Bretagne", content2:"weekend de mai", content3: "2016", content4: "Un moment de detente en famille"},
                    {classInfo1:"slide3", classInfo2:"title1 captionDelay1 FromBottom", content1:"Biarritz", content2:"Anniversaire Théo", content3: "2016", content4: "Surf and fun entre amis"}
                ]
    
                var sliders = [];
                var classActiveValue;
                for(var i=0; i<data.length;i++){
                  if(data[i].classInfo1 == this.props.currentTarget){
                    classActiveValue = "flex-active-slide";
                  } else {
                    classActiveValue = null;
                  }
                    sliders.push(<Slider classInfo1={data[i].classInfo1+' '+classActiveValue} classInfo2={data[i].classInfo2} content1={data[i].content1} content2={data[i].content2} content3={data[i].content3} content4={data[i].content4}/>);
                }
    
                return (
                    <div className="flexslider top_slider">
                    <ul className="slides">
                        {sliders}
                    </ul>
                </div>
                );
                }
            }

            module.exports = SliderList;