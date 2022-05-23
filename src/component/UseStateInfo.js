import React, { useState } from 'react';

const UseStateInfo = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [value, setValue] = useState(0);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <>
      <div>
        <div>
          name : <input value={name} onChange={onChangeName} />
          nick name : <input value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
          <div>
            <b>이름:</b> {name}
          </div>
          <div>
            <b>닉네임: </b>{nickname}
          </div>
        </div>
      </div>


      <div className='asd'>
        <p>
          현재 카운터 값은
          <b>{value}</b>
          입니다.
        </p>
        <button onClick={() => setValue(value + 1)}>+++</button>
        <button onClick={() => setValue(value - 1)}>---</button>
      </div>
    </>
  );
};

export default UseStateInfo;