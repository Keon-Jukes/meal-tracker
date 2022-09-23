import UseStateComponent from "./useStateComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseContextComponent from "./UseContextComponent";

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />
      <h1>UseEffect</h1>
      <UseEffectComponent />
      <h1>UseContext</h1>
      <UseContextComponent />
    </div>
  );
}

export default App;
