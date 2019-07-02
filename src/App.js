import React, { Component } from 'react';
import './App.css';

import Field from './Field';
import Users from './Users';
import EndMessage from './EndMessage';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {counter: 1, endMsg: "", elements: [0,0,0,0,0,0,0,0,0], end: false, endClass: "endMsg", reset: false}

    this.counterChange = this.counterChange.bind(this);
    this.resetStates = this.resetStates.bind(this);
  }

  counterChange(e){

    if(!this.state.end){
      let index = parseInt(e.target.parentElement.getAttribute('data-key'), 10);

      this.setState({
        counter: this.state.counter + 1,
        elements: this.state.elements.map((item, i) => {
          if(i === index && this.state.counter % 2 === 0) return 'x';
          else if(i === index && this.state.counter % 2 === 1) return 'o';
          else return item
        })
    });

    this.checkWin();
    }

  }

  checkWin(){

    if(this.state.counter >= 5){
      setTimeout(() => {
        if((this.state.elements[0] === this.state.elements[1] && this.state.elements[1] === this.state.elements[2] && this.state.elements[1] !== 0) || 
           (this.state.elements[0] === this.state.elements[3] && this.state.elements[3] === this.state.elements[6] && this.state.elements[3] !== 0) ||
           (this.state.elements[1] === this.state.elements[4] && this.state.elements[4] === this.state.elements[7] && this.state.elements[4] !== 0) ||
           (this.state.elements[2] === this.state.elements[5] && this.state.elements[5] === this.state.elements[8] && this.state.elements[5] !== 0) ||
           (this.state.elements[2] === this.state.elements[4] && this.state.elements[4] === this.state.elements[6] && this.state.elements[4] !== 0) ||
           (this.state.elements[3] === this.state.elements[4] && this.state.elements[4] === this.state.elements[5] && this.state.elements[4] !== 0) ||
           (this.state.elements[6] === this.state.elements[7] && this.state.elements[7] === this.state.elements[8] && this.state.elements[7] !== 0) ||
           (this.state.elements[0] === this.state.elements[4] && this.state.elements[4] === this.state.elements[8] && this.state.elements[4] !== 0)){
             this.setState({
               endMsg: "Wygrana",
               end: true,
               endClass: "endMsg endActive"
              })
           }
      },10)
    }
    if(this.state.counter === 9){
      let checkEnd = 0;
      this.state.elements.map(item => {
        if(item !== 0) checkEnd++;
        return item;
      })
      if(checkEnd === 8){
        this.setState({
          endMsg: "Koniec gry, remis!",
          end: true,
          endClass: "endMsg endActive"
        });
      }
    }
  }

  resetStates(){
    this.setState({
      end: false,
      endClass: "endMsg",
      elements: this.state.elements.map(item => {
        return 0;
      }),
      endMsg: "",
      counter: 1,
      reset: true
    })
  }

  allFields(){
    let fields = [];
    for(let i = 0; i < 9; i++) {
      fields[i] = <div key={i} className='fieldContainer' onClick={this.counterChange} data-key={i}><Field counter={this.state.counter} end={this.state.end} reset={this.state.reset}/></div>;
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
        <EndMessage endMsg={this.state.endMsg} endClass={this.state.endClass} resetStates={this.resetStates}/>
      </div>

    );
  }
}

export default App;
