import React, { useState } from 'react';

const UseStateBackground = () => {
  const [value, setValue] = useState(false);
  
  const Day_color = () => {
    setValue(current => !current)
    console.log(value)
  }
  
  return(
    <>
        <div>
          <div
            style ={{
              backgroundColor: value ? 'salmon' : 'black',
              color : value ? 'yellow' : 'white',
            }}
            onClick ={Day_color}
          >
            hello
          </div>
      </div>
    </>
  );
};



export default UseStateBackground;