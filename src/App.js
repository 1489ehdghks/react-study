import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import Detail from './component/Detail';
import NotFound from './component/404';
import UseStateInfo from './component/UseStateInfo';
import UseEffectInfo from './component/UseEffectInfo';
import UseContextInfo from './component/UseContextInfo';
import UseReducerInfo from './component/UseReducerInfo';
import UseMemoInfo from './component/UseMemoInfo';
import UseCallbackInfo from './component/UseCallbackInfo';
import UseRefinfo from  './component/UseRefinfo';
import UseRefinfo2 from './component/UseRefinfo2';
import UseStateBackground from './component/UseStateBackground';
import UseDebugValue from './component/UseDebugValue';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path="/" element={<Main />}></Route>
          <Route path="/detail/:detailID" element={<Detail />}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="/useStateInfo" element={<UseStateInfo />}></Route>
          <Route path="/useEffectInfo" element={<UseEffectInfo />}></Route>
          <Route path="/useContextInfo" element={<UseContextInfo />}></Route>
          <Route path="/useReducerInfo" element={<UseReducerInfo />}></Route>
          <Route path="/useMemoInfo" element={<UseMemoInfo />}></Route>
          <Route path="/useCallbackInfo" element={<UseCallbackInfo />}></Route>
          <Route path="/useRefinfo" element={<UseRefinfo />}></Route>
          <Route path="/useRefinfo2" element={<UseRefinfo2/>}></Route>
          <Route path="/UseStateBackground" element={<UseStateBackground/>}></Route>
          <Route path="/UseDebugValue"element={<UseDebugValue />}></Route>
          <Route path="*" element={<NotFound />}></Route>          s
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
