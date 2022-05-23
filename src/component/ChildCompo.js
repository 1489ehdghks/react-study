import React, { useImperativeHandle, forwardRef, useState } from 'react';

function ChildCompo(props,ref){
    const [name , setName] = useState('');
    const [age , setAge] = useState(0);


    useImperativeHandle(ref,() => ({
      addAge : value => setAge(age+ value),
      getNameLength : () => setName.length,
    }))


    return (
      <div>
        <p>{`name is ${name}`}</p>
        <p>{`age is ${age}`}</p>
      </div>
    )
  }

export default forwardRef(ChildCompo);