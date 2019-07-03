import React from 'react';

const EndMessage = (props) => {
    
    return(
        <div className={props.endClass}>
            <h2>{props.endMsg}{props.winner}</h2>
            <div className="btnContainer">
                <button onClick={() => {props.resetStates(false)}}>Nowa gra</button>
                <button onClick={() => {props.resetStates(true)}}>Kontynuuj</button>
            </div>
        </div>
    )
}

export default EndMessage;