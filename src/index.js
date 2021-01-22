import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
constructor (props){ 
  super(props);

  this.state = {lat: null};

window.navigator.geolocation.getCurrentPosition(
position => {
  this.setstate({ lat:position.coords.latitude });
},
);
}

render(){
return <div> Latitude:{this.state.lat} </div>;
}
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
