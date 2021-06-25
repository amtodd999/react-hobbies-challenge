import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {userState, useState} from 'react';
import Input from './components/Input';
import View from './components/View';

const App = () => {
  const [name, setName] = useState('Enter Name');
  const [age, setAge] = useState('Enter Age');
  const [hobbies, setHobbies] = useState('Enter Hobby');
  

  return (
    <div>
      <Input age={age} name={name} hobbies={ hobbies} 
      setAge={setAge} setName={setName} setHobbies={setHobbies}/>
      <View passedName={name} passedAge={age} passedHobbies={hobbies}/>

    </div>
  );
}

export default App;
