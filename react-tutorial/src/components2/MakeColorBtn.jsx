import React, { useEffect, useState } from 'react';
import { myHook } from './Todo';

//색상 버튼을 만드는 컴포넌트
export default function MakeColorBtn() {
  const {} = myHook();

  return (
    <button
      onClick={() => {
        setBoxColor(color);
      }}
      style={{ marginRight: '5px', borderRadius: '20px', width: '15px', height: '15px', backgroundColor: color }}
    />
  );
}
