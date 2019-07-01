import React, { Component } from 'react';
import './App.css';

import Field from './Field';
import Users from './Users';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {counter: 1, endMsg: ""}

    this.counterChange = this.counterChange.bind(this);
  }

  counterChange(){
    this.setState({
      counter: this.state.counter + 1
    });
    if(this.state.counter === 9) {
      this.setState({
        endMsg: "Koniec gry!"
      });
    }
  }

  allFields(){
    let fields = [];
    for(let i = 0; i < 9; i++) {
      fields[i] = <div key={i} className='fieldContainer' onClick={this.counterChange}><Field counter={this.state.counter}/></div>;
    }
    return fields;
  }


  render() {
    return (
      <div className="container">
        <Users userOne="Torvey" userTwo="Gunwo"/>
        <div className="board"> 
          {this.allFields()}
        </div>
        <h2 className="endMsg">{this.state.endMsg}</h2>
      </div>

    );
  }
}

export default App;
