import React from 'react';
import Points from './Points';

const Information = (props) => {
    return (
        <div className="informationContainer">
            <p className={props.classInfoRight}>{props.userOne}</p>
            <Points pointOne={props.pointOne} pointTwo={props.pointTwo} left={props.classInfoLeft} right={props.classInfoRight}/>
            <p className={props.classInfoLeft}>{props.userTwo}</p>
        </div>
    )
}

export default Information;