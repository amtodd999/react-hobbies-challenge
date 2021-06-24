import { useState } from "react";
import React from "react";

const Input = (props) => {
    return (
        <div className='main'>
            <form className='form'>
                <input value={props.name} onChange={e => props.setName(e.target.value)} style={{width: '50%', height: '50%', textAlign: 'center'}}/>
                <br />
                <input value={props.age} onChange={e => props.setAge(e.target.value)} style={{width: '50%', height: '50%', textAlign: 'center'}} />
                <br />
                <input value={props.hobbies} onChange={e => props.setHobbies(e.target.value)} style={{width: '50%', height: '50%', textAlign: 'center'}}/>
            </form>
        </div>
    );
};


export default Input;

