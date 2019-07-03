import React from 'react';

const EndMessage = (props) => {
    
    return(
        <div className={props.endClass}>
            <h2>{props.endMsg}</h2>
            <div className="btnContainer">
                <button onClick={props.resetStates}>Nowa gra</button>
                <button onClick={props.resetStates}>Kontynuuj</button>
            </div>
        </div>
    )
}

export default EndMessage;