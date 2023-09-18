import Hello from "./components/Hello";
import Time from "./components/Time";
import HelloProps from "./components/HelloProps";
import Resume from "./components/Resume";
import ColorText from "./components/ColorText";

function App() {
  return (
    <div>
      <Hello name="개리" />
      <Time />
      <HelloProps
        name="DongJoo"
        age={15}
        someFunc={() => "aswesome"}
        someJSX={<img src="https://picsum.photos/id/237/200/300" />}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }}
      />
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />
    </div>
  );
}

export default App;
