import "./App.css";

function App() {
  const name = "라이켓";

  function 함수() {
    return "함수";
  }

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const someStyle = { backgroundColor: "black", color: "white" };

  return (
    <div>
      <h1 className="h1">
        안녕 {name}
        {함수}
      </h1>
      <h1 className="newClass" style={someStyle}>
        안녕 동주야
      </h1>
      <input type="text" style={{ backgroundColor: "red" }} />
      <div style={{ backgroundColor: "black", color: "white" }}>
        <h1 style={{ color: "red" }}>년:{year}</h1>
        <h1>
          월/일: {month + 1}/{day}
        </h1>
        <h1>
          시간: {hours}시{min}분{sec}초
        </h1>
      </div>
      <div>{}</div>
    </div>
  );
}

export default App;
