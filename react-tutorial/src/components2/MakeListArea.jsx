import React, { useEffect, useState } from 'react';
import { myHook } from './Todo';


inputText,
    setInputText,
    boxColor,
    setBoxColor,
    searchText,
    setSearchText,
    searchList,
    setSearchList,
    reRender,
    setReRender,
//List을 보여주는 화면을 그리는 컴포넌트 (내부에서 MakeTodoItem 컴포넌트를 호출한다)
export default function MakeListArea() {
  const {} = myHook();
  const todoList = JSON.parse(localStorage.getItem('todo'));

  return (
    <div>
      <h5>todo 리스트</h5>
      {todoList != null
        ? todoList.map(() => {
            return <MakeTodoItem />;
          })
        : null}
    </div>
  );
}
