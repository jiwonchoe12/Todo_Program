import { myHook } from './Todo';
import MakeTodoItem from './MakeTodoItem'

export default function MakeListArea() {
    const {searchList} = myHook();
  
    return (
      <div>
        <h5>todo 검색 결과</h5>
        {searchList != null
          ? searchList.map((item) => {
              return <MakeTodoItem key={item.key} item={item}/>;
            })
          : null}
      </div>
    );
  }