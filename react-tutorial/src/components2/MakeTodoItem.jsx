import React, { useEffect, useState } from 'react';
import { myHook } from './Todo';

//todo item 박스 하나를 만드는 컴포넌트
export default function MakeTodoItem() {
  const {} = myHook();

  const deleteButtonFunc = () => {
    const storage = JSON.parse(localStorage.getItem('todo'));
    const newStorage = storage.filter((elem) => elem.key != item.key);
    localStorage.removeItem('todo');
    localStorage.setItem('todo', JSON.stringify([...newStorage]));

    setReRender((prev) => !prev);
  };

  const modifyButtonFunc = () => {
    const modifyText = prompt('수정하려고하는 Text을 입력하세요');

    const storage = JSON.parse(localStorage.getItem('todo'));
    const newStorage = storage.filter((elem) => elem.key != item.key);
    const modifyElem = storage.find((elem) => elem.key === item.key);
    modifyElem.todo = modifyText;

    localStorage.removeItem('todo');
    localStorage.setItem('todo', JSON.stringify([...newStorage, modifyElem]));

    setReRender((prev) => !prev);
  };

  return (
    <div
      style={{
        backgroundColor: item.color,
        borderRadius: '5px',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ paddingLeft: '15px' }}>{item.todo}</div>
      <div style={{ display: 'flex', marginLeft: 'auto', marginRight: '15px' }}>
        <button onClick={deleteButtonFunc} style={{ height: '80%', borderRadius: '5px', fontSize: '10px' }}>
          삭제
        </button>
        <button onClick={modifyButtonFunc} style={{ height: '80%', borderRadius: '5px', fontSize: '10px' }}>
          수정
        </button>
      </div>
    </div>
  );
}
