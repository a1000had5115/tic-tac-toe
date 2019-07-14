import React, {Component} from 'react';

class InsertUsers extends Component {

    constructor(props){
        super(props);
        this.state = {userOne: "", userTwo: "", value1: "", value2: "", ifEmpty: "", emptyMsg: "Pola nie mogą być puste!"}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){

        e.preventDefault();

        if(this.state.value1 === "" || this.state.value2 === "") this.setState({ifEmpty: "showMsg"})
        if(this.state.value1 === this.state.value2 ) this.setState({emptyMsg: "Nazwy nie mogą być takie same!", ifEmpty: "showMsg"})
        else this.props.insertUsers(this.state.value1, this.state.value2);
        
    }

    handleChange(e){
        if(e.target.getAttribute('data-key') === "1") this.setState({value1: e.target.value});
        else this.setState({value2: e.target.value});
    }

    render(){
        return(
            <div className={`${this.props.usersClass} createUsers`}>
                <form onSubmit={this.handleSubmit}>
                    <div className="inputGroup">
                        <label>Gracz nr 1</label>
                        <input type="text" data-key="1" onChange={this.handleChange} value={this.state.value1}/>
                    </div>

                    <div className="inputGroup">
                        <label>Gracz nr 2</label>
                        <input type="text" data-key="2" onChange={this.handleChange} value={this.state.value2}/>
                    </div>

                    <div className="inputGroup">
                        <input type="submit" value="Graj" onClick={this.checkInputs}/>
                    </div>
                </form>
                <h3 className={this.state.ifEmpty}>{this.state.emptyMsg}</h3>
            </div>
        )
    }

}

export default InsertUsers;