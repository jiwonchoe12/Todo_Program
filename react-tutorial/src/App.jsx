import Todo from './components2/Todo';
import MakeUserInputArea from './components2/MakeUserInputArea';
import MakeSearchInputArea from './components2/MakeSearchInputArea';
import MakeColorBtn from './components2/MakeColorBtn';
import MakeListArea from './components2/MakeListArea';

function App() {
  return (
    <div id="root">
      <Todo>
        <div id="outer-container">
          <div id="inner-container-left">
            <h1>Todo App</h1>
            <MakeUserInputArea />
            <div id="colorBtns">
              <MakeColorBtn color="silver" setBoxColor={setBoxColor} />
              <MakeColorBtn color="peachpuff" setBoxColor={setBoxColor} />
              <MakeColorBtn color="lemonchiffon" setBoxColor={setBoxColor} />
              <MakeColorBtn color="mistyrose" setBoxColor={setBoxColor} />
            </div>
            <MakeListArea />
          </div>

          <div id="inner-container-right">
            <h1>Todo Search</h1>
            <MakeSearchInputArea />
            <MakeListArea />
          </div>
        </div>
      </Todo>
    </div>
  );
}

export default App;
