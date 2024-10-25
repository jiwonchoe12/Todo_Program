import React, { useState, createContext, useContext } from 'react';

const MyContext = createContext();

export function myHook() {
  const {
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
  } = useContext();
  return {
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
  };
}

export default function Todo({ children }) {
  const [inputText, setInputText] = useState('');

  const [boxColor, setBoxColor] = useState('silver');

  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);

  const [reRender, setReRender] = useState(false);

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
    <MyContext.Provider
      value={{
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
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
