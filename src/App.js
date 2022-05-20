import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';



function App() {
  const [count, setCount]= useState(1);

  const handleCountUpdate= () => {
    setCount(count+1);
  };

  const handleInputChange(e) => {
    setName(e.target.value);
  }

  //랜더링 될 때마다 사용됨.
  useEffect(()=> {
    console.log('랜더링');
  });
  
  return(
    <div>
      <span>count : {count}</span>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type='text' value={name}onChange={handleInputChange}/>
      <span>name : {name}</span>
    </div>

  );  
}


export default App;
