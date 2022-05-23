import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Main = (props) => {
    function searchApi() {
        const url = "/api/test";
        axios.get(url)
            .then(function (response) {
                console.log("성공", response.data);
            })
            .catch(function (error) {
                console.log("실패");
            })

    }
    return (
        <>
            <h3>안녕하세요. 메인페이지 입니다.</h3>
            <ul>
                <Link to="/detail/1"><li>상세1</li></Link>
                <Link to="/detail/2"><li>상세2</li></Link>
                <Link to="/useStateInfo"><li>useStateInfo</li></Link>
                <Link to="/useEffectInfo"><li>useEffectInfo</li></Link>
                <Link to="/useContextInfo"><li>useContextInfo</li></Link>
                <Link to="/useReducerInfo"><li>useReducerInfo</li></Link>
                <Link to="/useMemoInfo"><li>useMemoInfo</li></Link>
                <Link to="/useCallbackInfo"><li>useCallbackInfo</li></Link>
                <Link to="/UseStateBackground"><li>UseStateBackground</li></Link>
                <Link to ="/UseRefinfo"><li>UseRefinfo</li></Link>
                <Link to ="/UseRefinfo2"><li>UseRefinfo2</li></Link>
                <Link to = "/UseDugValue"><li>UseDugValue</li></Link>
                <Link to = "/UseDebugValue"><li>UseDebugValue</li></Link>
            </ul>
            <button onClick={searchApi}> 불러오기 </button>
        </>
    );
};

export default Main;