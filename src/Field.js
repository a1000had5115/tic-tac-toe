import React, {Component} from 'react';

class Field extends Component {

    constructor(props){

        super(props);
        this.state = {symbol: "", className: ""};

        this.handleClickField = this.handleClickField.bind(this);
    }

    componentWillReceiveProps(){
        if(this.props.reset) this.setState({symbol: ""}) // NA TYM STANĘŁO SKOŃCZ TO PÓŹNIEJ
    }
    
   handleClickField() {
        if(!this.props.end){
            if(this.props.counter % 2 === 0 && this.state.symbol === "") this.setState({symbol: "X"})
            else if(this.props.counter % 2 === 1 && this.state.symbol === "") this.setState({symbol: "O"})

            this.setState({
                className: 'activeP'
            })
        }
    }

    


    render(){
        return(
            <div className="field" onClick={this.handleClickField}>
                <p className={this.state.className}>{this.state.symbol}</p>
            </div>
        );
    }

}

export default Field;