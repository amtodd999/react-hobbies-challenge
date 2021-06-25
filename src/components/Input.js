import React from "react";

const Input = (props) => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <input placeholder={props.name} onChange={e => props.setName(e.target.value)} style={{width: '50%', height: '50%', textAlign: 'center'}} type='text'/>
                <br />
                <input placeholder={props.age} onChange={e => props.setAge(e.target.value)} style={{width: '50%', height: '50%', textAlign: 'center'}} />
                <br />
                <input placeholder={props.hobbies} onChange={e => props.setHobbies(e.target.value)} style={{width: '50%', height: '50%', textAlign: 'center'}}/>
                <br />
            </div>
        </div>
    );
};


export default Input;

