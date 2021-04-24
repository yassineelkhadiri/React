import React from 'react'
import './UserOutput.css'


const userOutput = ( props ) => {

    return (
        <div className='UserOutput'>
            <p>Some random text sent by {props.name} </p>
            <p>More random text </p>
        </div>

    );

};
export default userOutput;