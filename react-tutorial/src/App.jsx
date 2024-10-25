import Todo from './components2/Todo';
import MakeInputArea from './components2/MakeInputArea';
import MakeColorBtn from './components2/MakeColorBtn';
import MakeListArea from './components2/MakeListArea';

function App() {
  return (
    <div style={{ backgroundColor: 'ivory', height: '5000px' }}>
      <Todo>
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <h1>Todo App</h1>
            <MakeInputArea />
            {/* <div id="colorBtns">
              <MakeColorBtn color="silver" setBoxColor={setBoxColor} />
              <MakeColorBtn color="peachpuff" setBoxColor={setBoxColor} />
              <MakeColorBtn color="lemonchiffon" setBoxColor={setBoxColor} />
              <MakeColorBtn color="mistyrose" setBoxColor={setBoxColor} />
            </div> */}
            <MakeListArea />
          </div>

          <div>
            <h1>Todo Search</h1>
            <MakeInputArea />
            <MakeListArea />
          </div>
        </div>
      </Todo>
    </div>
  );
}

export default App;
