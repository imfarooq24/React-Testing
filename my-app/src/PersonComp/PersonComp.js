import React from 'react';

const PersonComp = (props) => {
    return (
        <div>
            <p onClick={props.click}>Im {props.name}</p>
            <p>And my age is {props.age}</p>
        </div>
    )
}

export default PersonComp;