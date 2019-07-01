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
    console.log(this.state.counter)
  }


  render() {
    return (
      <div className="container" onClick={this.counterChange}>
        <Field number="1" counter={this.state.counter}/>
        <Field number="2" counter={this.state.counter}/>
        <Field number="3" counter={this.state.counter}/>
        <Field number="4" counter={this.state.counter}/>
        <Field number="5" counter={this.state.counter}/>
        <Field number="6" counter={this.state.counter}/>
        <Field number="7" counter={this.state.counter}/>
        <Field number="8" counter={this.state.counter}/>
        <Field number="9" counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
