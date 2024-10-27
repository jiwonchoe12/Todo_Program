import Todo from './components2/Todo';
import MakeUserInputArea from './components2/MakeUserInputArea';
import MakeSearchInputArea from './components2/MakeSearchInputArea';
import MakeColorBtn from './components2/MakeColorBtn';
import MakeListArea from './components2/MakeListArea';
import MakeSearchListArea from './components2/MakeSearchListArea';
import './App.css';

function App() {
  return (
    <div id="root">
      <Todo>
        <div id="outer-container">
          <div id="inner-container-left">
            <h1>Todo App</h1>
            <MakeUserInputArea />
            <div id="colorBtns">
              <MakeColorBtn color="silver"/>
              <MakeColorBtn color="peachpuff"/>
              <MakeColorBtn color="lemonchiffon"/>
              <MakeColorBtn color="mistyrose"/>
            </div>
            <MakeListArea />
          </div>

          <div id="inner-container-right">
            <h1>Todo Search</h1>
            <MakeSearchInputArea />
            <MakeSearchListArea />
          </div>
        </div>
      </Todo>
    </div>
  );
}

export default App;
