import React, { useEffect, useState } from 'react';
import { myHook } from './Todo';

//search input과 버튼을 만드는 컴포넌트
export default function MakeSearchInputArea() {
  const { inputText, setInputText, boxColor } = myHook();

  //SearchList 배열에 요소 추가
  const setSearchListFunc = (input, boxColor, mainList, setMainList) => {
    const storage = JSON.parse(localStorage.getItem('todo'));
    setMainList(
      storage.filter((item) => {
        if (item.todo.search(input) !== -1) {
          return true;
        }
        return false;
      }),
    );
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
