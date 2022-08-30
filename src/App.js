import "./App.scss";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>
        Lorem Ipsum <span>delta beta</span>
      </p>
      <div className="grid">
        <div className="box opacity-1">a</div>
        <div className="box opacity-2">a</div>
        <div className="box opacity-3">a</div>
        <div className="box opacity-4">a</div>
        <div className="box opacity-5">a</div>
        <div className="box opacity-6">a</div>
        <div className="box opacity-7">a</div>
        <div className="box opacity-8">a</div>
        <div className="box opacity-9">a</div>
        <div className="box opacity-10">a</div>
      </div>
      <div>
        <p>Total:{state}</p>
        <button onClick={() => dispatch({ type: "INCREMENTAR" })}>Somar</button>
      </div>
    </div>
  );
}

export default App;
