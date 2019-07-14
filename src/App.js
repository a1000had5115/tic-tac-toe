import React, { Component } from 'react';
import './App.css';

import InsertUsers from './InsertUsers';
import Field from './Field';
import Information from './Information';
import EndMessage from './EndMessage';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      counter: 1, 
      endMsg: "", 
      elements: [0,0,0,0,0,0,0,0,0], 
      end: false, 
      endClass: "endMsg", 
      reset: false,
      winner: "",
      userOnePoints: 0,
      userTwoPoints: 0,
      classInfoRight: "",
      classInfoLeft: "",
      boardClass: "hide",
      userInputClass: "",
      userOne: "",
      userTwo: ""
    }

    this.newUsers = this.newUsers.bind(this);
    this.counterChange = this.counterChange.bind(this);
    this.resetStates = this.resetStates.bind(this);
    this.startedNewGame = this.startedNewGame.bind(this);
  }

  newUsers(user1, user2){
    this.setState({
      userInputClass: "hide",
      boardClass: "showBoard",
      userOne: user1,
      userTwo: user2
    })

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
               end: true,
               endClass: "endMsg endActive",
               endMsg: "Wygrał ", 
              })
              if(this.state.counter % 2 === 0){
                if((this.state.userOnePoints + this.state.userTwoPoints) % 2 === 0){
                  this.setState({
                    winner: this.state.userOne,
                    userOnePoints: this.state.userOnePoints + 1
                  })
                }
                else(
                  this.setState({
                    winner: this.state.userTwo,
                    userTwoPoints: this.state.userTwoPoints + 1
                  })
                )
              }

              else{
                if((this.state.userOnePoints + this.state.userTwoPoints) % 2 === 0){
                  this.setState({
                    winner: this.state.userTwo,
                    userTwoPoints: this.state.userTwoPoints + 1
                  })
                }
                else(
                  this.setState({
                    winner: this.state.userOne,
                    userOnePoints: this.state.userOnePoints + 1
                  })
                )
              }
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
          endClass: "endMsg endActive",
          winner: ""
        });
      }
    }
  }

  startedNewGame(){
    this.setState({
      reset: false
    })
  }

  resetStates(cont){
    this.setState({
      end: false,
      endClass: "endMsg",
      elements: this.state.elements.map(item => {
        return 0;
      }),
      counter: 1,
      reset: true,
    });
    if(!cont){
      this.setState({
        userOnePoints: 0,
        userTwoPoints: 0,
        winner: ""
      })
    }
    if(cont){
      if((this.state.userOnePoints + this.state.userTwoPoints) % 2 === 1){
        this.setState({
          classInfoLeft: "sideLeft",
          classInfoRight: "sideRight"
        })
      }
      else{
        this.setState({
          classInfoLeft: "",
          classInfoRight: ""
        })
      }
    }
  }

  allFields(){
    let fields = [];
    for(let i = 0; i < 9; i++) {
      fields[i] = <div key={i} className='fieldContainer' onClick={this.counterChange} data-key={i}><Field counter={this.state.counter} end={this.state.end} reset={this.state.reset} startedNewGame={this.startedNewGame}/></div>;
    }
    return fields;
  }


  render() {
    return (
      <div className="container">
        <h1>Kółko i krzyżyk</h1>
        <InsertUsers insertUsers={this.newUsers} usersClass={this.state.userInputClass}/>
        <div className={`${this.state.boardClass} playground`}> 
          <Information userOne={this.state.userOne} userTwo={this.state.userTwo} pointOne={this.state.userOnePoints} pointTwo={this.state.userTwoPoints} classInfoLeft={this.state.classInfoLeft} classInfoRight={this.state.classInfoRight}/>
          <div className="board"> 
            {this.allFields()}
          </div>
          <EndMessage endMsg={this.state.endMsg} winner={this.state.winner} endClass={this.state.endClass} resetStates={this.resetStates}/>
        </div>
      </div>

    );
  }
}

export default App;
