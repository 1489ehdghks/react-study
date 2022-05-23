import { useRef, useState } from "react";

const UseRefinfo = () => { 
    const [renderer, setRenderer] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;

    const increaseRef = () =>{
        countRef.current = countRef.current +1;
        console.log('Ref : ',countRef.current);
    };

    const increaseVar =() => {
        countVar = countVar +1;
        console.log('Var : ',countVar);
    };
    const doRendering =() => {
        setRenderer(renderer +1);
    };

    return(
        <div>
            <p>Ref : {countRef.current}</p>
            <p>Var : {countVar.current}</p>
            <button onClick={doRendering}>랜더링</button>
            <button onClick={increaseRef}>ref 올림</button>
            <button onClick={increaseVar}>Var 올림</button>
        </div>
    )
};

export default UseRefinfo;
