import React, { useEffect, useState } from 'react';
import { myHook } from './Todo';
import '../App.css';

//todo item 박스 하나를 만드는 컴포넌트
export default function MakeTodoItem({item}) {
  const {setReRender} = myHook();

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
      style={{ backgroundColor: item.color }} id='todo-item-container'>
      <div id='todo-item-text'>{item.todo}</div>
      <div id='todo-item-buttons'>
        <button onClick={deleteButtonFunc} className='delete-modify-button'>
          삭제
        </button>
        <button onClick={modifyButtonFunc} className='delete-modify-button'>
          수정
        </button>
      </div>
    </div>
  );
}
