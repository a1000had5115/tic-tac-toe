import React from 'react';

const Points = props => {
    return(
        <div className="points">
            <p className={props.right}>{props.pointOne}</p>
            <p>:</p>
            <p className={props.left}>{props.pointTwo}</p>
        </div>
    )
}

export default Points;