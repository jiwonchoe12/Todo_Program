import React, { useEffect, useState } from 'react';

const MyContext = createContext();

function myHook() {
  const {} = useContext();
  return {};
}

//input과 버튼을 만드는 컴포넌트
function MakeInputArea({ input, setInput, boxColor, mainList, setMainList, modifyListFunc, btnName }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        style={{ backgroundColor: boxColor, borderRadius: '10px' }}
      />
      <button
        onClick={() => {
          modifyListFunc(input, boxColor, mainList, setMainList);
          setInput('');
        }}
        style={{ marginLeft: '3px', borderRadius: '10px' }}
      >
        {btnName}
      </button>
    </div>
  );
}

//색상 버튼을 만드는 컴포넌트
function MakeColorBtn({ color, setBoxColor }) {
  return (
    <button
      onClick={() => {
        setBoxColor(color);
      }}
      style={{ marginRight: '5px', borderRadius: '20px', width: '15px', height: '15px', backgroundColor: color }}
    />
  );
}

//List을 보여주는 화면을 그리는 컴포넌트 (내부에서 MakeTodoItem 컴포넌트를 호출한다)
function MakeListArea({ title, todoList, setReRender }) {
  return (
    <div>
      <h5>{title}</h5>
      {todoList != null
        ? todoList.map((item) => {
            return <MakeTodoItem item={item} key={item.key} setReRender={setReRender} />;
          })
        : null}
    </div>
  );
}

//todo item 박스 하나를 만드는 컴포넌트
function MakeTodoItem({ item, setReRender }) {
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

export default function Todo() {
  const [inputText, setInputText] = useState('');

  const [boxColor, setBoxColor] = useState('silver');

  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);

  const [reRender, setReRender] = useState(false);

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
    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <h1>Todo App</h1>
        <MakeInputArea
          input={inputText}
          setInput={setInputText}
          boxColor={boxColor}
          modifyListFunc={setTodoListFunc}
          btnName="입력"
        />
        <div id="colorBtns">
          <MakeColorBtn color="silver" setBoxColor={setBoxColor} />
          <MakeColorBtn color="peachpuff" setBoxColor={setBoxColor} />
          <MakeColorBtn color="lemonchiffon" setBoxColor={setBoxColor} />
          <MakeColorBtn color="mistyrose" setBoxColor={setBoxColor} />
        </div>
        <MakeListArea
          title="Todo Items"
          todoList={JSON.parse(localStorage.getItem('todo'))}
          setReRender={setReRender}
        />
      </div>

      <div>
        <h1>Todo Search</h1>
        <MakeInputArea
          input={searchText}
          setInput={setSearchText}
          boxColor="white"
          mainList={searchList}
          setMainList={setSearchList}
          modifyListFunc={setSearchListFunc}
          btnName="검색"
        />
        <MakeListArea title="검색 결과" todoList={searchList} setReRender={setReRender} />
      </div>
    </div>
  );
}
