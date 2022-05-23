import { useState, useRef } from "react"; 

const UseRefinfo2 = () => {
    const [count,SetCount] = useState(0);
    const countRef = useRef(0);
    console.log(countRef);
    console.log('rendering');


    const increaseCountstate = () => {
        SetCount(count +1);
    };
    const increaseCountRef =() => {
        countRef.current = countRef.current +1; 
        console.log('Ref: ', countRef.current);
    };

return (
    <div>
        <p>State : {count}</p>
        <p>Ref : {countRef.current}</p>
        <botton onClick={increaseCountstate}> state 올림</botton>
        <botton onClick={increaseCountRef}> ref 올림 </botton>
    </div>
    );
};

export default UseRefinfo2;
