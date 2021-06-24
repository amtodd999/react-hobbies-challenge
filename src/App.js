import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {userState, useState} from 'react';
import Input from './components/Input';

const App = () => {
  const [name, setName] = useState('Enter Name');
  const [age, setAge] = useState('Enter Age');
  const [hobbies, setHobbies] = useState('Enter Hobby');
  
// const nameChangeHandler = (event) => {
//   setName(event.target.value);
//   console.log(name)
// }

  return (
    <div>
      <Input age={age} name={name} hobbies={ hobbies} />

    </div>
  );
}

export default App;
