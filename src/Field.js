import React, {Component} from 'react';

class Field extends Component {

    constructor(props){

        super(props);
        this.state = {symbol: ""};

        this.abc = this.abc.bind(this);
        
    }

   abc() {
       if(this.props.counter % 2 === 0 && this.state.symbol === "") this.setState({symbol: "X"})
       else if(this.props.counter % 2 === 1 && this.state.symbol === "") this.setState({symbol: "O"})
    }


    render(){
        return(
            <div className="field" onClick={this.abc}>
                {this.state.symbol}
            </div>
        );
    }

}

export default Field;