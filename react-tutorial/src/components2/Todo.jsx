import React, { useState, createContext, useContext } from 'react';

const MyContext = createContext();

export default function Todo({ children }) {
  const [inputText, setInputText] = useState('');

  const [boxColor, setBoxColor] = useState('silver');

  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);

  const [reRender, setReRender] = useState(false);

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
  } = useContext(MyContext);
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