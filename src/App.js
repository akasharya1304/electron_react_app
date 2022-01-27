import {React, useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [tag,setTag] = useState();
  const clicked =() => {
    setTag(<Button />)
  }
  return (
    <div>
      <h1>Hello React Desktop App</h1>
      <h6>this is for checking</h6>
      <Button />
      <Button />
      <button onClick={clicked}>Clicked to rendered new thing</button>
      {tag}
    </div>
    
  );
}

export default App;
