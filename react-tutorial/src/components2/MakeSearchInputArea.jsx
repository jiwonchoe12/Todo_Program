import React, { useCallback, useEffect, useState } from 'react';
import { myHook } from './Todo';

//search input과 버튼을 만드는 컴포넌트
export default function MakeSearchInputArea() {
  const { searchText, setSearchText, setSearchList} = myHook();

  // SearchList 배열에 요소 추가
  const addSearchListFunc = useCallback((input) => {
    console.log("input", input);
    const storage = JSON.parse(localStorage.getItem('todo'));
    if (storage == null){return null;}
    if (input == ''){setSearchList([]); return null;}
    setSearchList(
      storage.filter((item) => {
        if (item.todo.search(input) !== -1) {
          return true;
        }
        return false;
      }),
    );
  }, [searchText])
  
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearchText(e.target.value);
          addSearchListFunc(e.target.value);
        }}
        value={searchText}
        placeholder='search'
        id="search-input"
      />
    </div>
  );
}
