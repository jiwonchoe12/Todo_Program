import { myHook } from './Todo';
import MakeTodoItem from './MakeTodoItem'

//List을 보여주는 화면을 그리는 컴포넌트 (내부에서 MakeTodoItem 컴포넌트를 호출한다)
export default function MakeListArea() {
  const {setReRender} = myHook();
  const todoList = JSON.parse(localStorage.getItem('todo'));

  return (
    <div>
      <h5>todo 리스트</h5>
      {todoList != null
        ? todoList.map((item) => {
            return <MakeTodoItem key={item.key} item={item}/>;
          })
        : null}
    </div>
  );
}
