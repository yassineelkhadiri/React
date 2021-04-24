import React from 'react'

const userInput = (props) => {
    const style = {
        border :'2px solid #kkk' ,

    }
    return <input type='text' style={style} onChange={props.change} value={props.currentName}/>
};

export default userInput;