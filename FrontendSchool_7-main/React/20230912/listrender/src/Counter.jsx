import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // state 함수가 실행되면 state가 변경됩니다. state가 변경되면 컴포넌트가 다시 렌더링 됩니다.
    // state 함수는 비동기적으로 실행 이벤트가 언제 발생할지 모르기때문이다.
    // react는 state가 연속적으로 호출될 때 바로 실행하지 않는다.
    // 마지막 state가 호출되고 나서 일정시간 뒤 마지막 state 함수만 실행한다
    // 이때 state함수는 바로 실행되지 않고 기다렸다가 가장 마지막에 호출된 state 함수만 실행.
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Count의 값은 : {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}
