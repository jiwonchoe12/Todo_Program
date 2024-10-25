import React, { useEffect, useState } from 'react';
import { myHook } from './Todo';

//user input과 버튼을 만드는 컴포넌트
export default function MakeUserInputArea() {
  const { inputText, setInputText, boxColor } = myHook();

  //TodoList 배열에 요소 추가
  const setTodoListFunc = (input, boxColor) => {
    if (!localStorage.getItem('keyIdx')) {
      localStorage.setItem('keyIdx', 0);
    }
    const keyIdx = Number(localStorage.getItem('keyIdx'));
    const storage = JSON.parse(localStorage.getItem('todo'));
    if (storage == null) {
      localStorage.setItem('todo', JSON.stringify([{ color: boxColor, todo: input, key: keyIdx }]));
      localStorage.setItem('keyIdx', keyIdx + 1);
    } else {
      localStorage.removeItem('todo');
      localStorage.setItem('todo', JSON.stringify([...storage, { color: boxColor, todo: input, key: keyIdx }]));
      localStorage.setItem('keyIdx', keyIdx + 1);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText}
        style={{ backgroundColor: boxColor, borderRadius: '10px' }}
      />
      <button
        onClick={() => {
          setTodoListFunc(inputText, boxColor);
          setInputText('');
        }}
        style={{ marginLeft: '3px', borderRadius: '10px' }}
      >
        입력
      </button>
    </div>
  );
}
