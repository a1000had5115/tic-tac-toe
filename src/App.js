import React, { Component } from 'react';
import './App.css';

import Field from './Field';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {counter: 1}

    this.counterChange = this.counterChange.bind(this);
  }

  counterChange(){
    this.setState({
      counter: this.state.counter + 1
    })
  }

  allFields(){
    let fields = [];
    for(let i = 0; i < 9; i++) {
      fields[i] = <div key={i} className="fieldContainer" onClick={this.counterChange}><Field counter={this.state.counter}/></div>;
    }
    return fields;
  }


  render() {
    return (//onClick={this.counterChange}
      <div className="container"> 
        {this.allFields()}
      </div>
    );
  }
}

export default App;
