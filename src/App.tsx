import UseStateComponent from "./useStateComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseContextComponent from "./UseContextComponent";
import UseReducerComponent from "./UseReducerComponent";


function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />
      <h1>UseEffect</h1>
      <UseEffectComponent />
      <h1>UseContext</h1>
      <UseContextComponent />
      <h1>UseReducer</h1>
      <UseReducerComponent />
      <h1>UseRef</h1>
    </div>
  );
}

export default App;
