import React, { useEffect, useState } from "react";

//카운터에 사용할 count state, input에 사용될 text state
const UseEffectInfo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    //1번 Mount탄생시점
    useEffect(() => {
        console.log("Mount탄생!");
    }, []);

    //2번 Update시점(댑스입력X)
    useEffect(() => {
        console.log("Update!");
    });

    //2번 Update시점(댑스입력O)
    useEffect(() => {
        console.log(`count is update : ${count}`);
        if (count > 5) {
            alert("최대수량은 5개입니다.");
            setCount(5);
        }
    }, [count]);

    useEffect(() => {
        console.log(`text is update : ${text}`);
    }, [text]);

    const UnmountTest = () => {
        useEffect(() => {
            console.log("UnmiuntTestMount!");

            return () => {
                //Unmount시점에 실행됨
                console.log("Unmount!");
            };
        }, []);

        return <div>Unmount Testing Component</div>;
    };

    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);
    return (
        <div style={{ padding: 20 }}>
            <div>
                {count}
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div>
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div style={{ padding: 20 }}>
                <button onClick={toggle}>ON/OFF</button>
                {isVisible && <UnmountTest />}
            </div>
        </div>
    );
};

export default UseEffectInfo;