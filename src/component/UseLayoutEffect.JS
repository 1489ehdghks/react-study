import { useEffect, useState } from "react"

const UseLayoutEffect = () => {
    const[count,setCount] = useState(0);
    const[text,setText] = useState("");
}
    //1번 mount 탄생시점.
    UseLayoutEffect(() => {
        console.log('mount 탄생');
    }, []);

    //2번 update 시점. (deps 입력 x)
    UseLayoutEffect(() => {
        console.log('update!');
    });
    //3번 update 시점. (deps 입력 o)
    UseLayoutEffect(() =>{
        console.log(`count is update : ${count}.`);
        if(count >5){
            alert('최대수량은 5개입니다.');
            setCount(5);
        }
    })




export default UseLayoutEffect;
