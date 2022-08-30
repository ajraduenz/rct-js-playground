import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { incrementar, reduzir } from "./store/contador";
import { close, open } from "./store/alertMessage";

function App() {
  
  const total = useSelector((state) => state.contador.total);
  const alertMessage = useSelector((state) => state.alertMessage);
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
        <p>Total:{total}</p>
        <button onClick={() => dispatch(incrementar())}>Somar</button>
        <button onClick={() => dispatch(reduzir())}>Diminuir</button>
      </div>
      <div>
        <button onClick={() => dispatch(open())}>open alert</button>
        <button onClick={() => dispatch(close())}>close alert</button>
      </div>
      {alertMessage && <p>Alert message</p>}
    </div>
  );
}

export default App;
