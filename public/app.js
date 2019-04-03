var React     = require('react');
var ReactDOM  = require('react-dom');

var Title = require('./title');
var Home = require('./home');

class App extends React.Component {

     constructor() {
       super();
     }

     render() {
       return (
        <div>
            <Title/>
            <Home/>
        </div>
       );
     }
   }

ReactDOM.render(
    <div>
        <App/>
    </div>
    ,
    document.getElementById('page')
);
