import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/cakeContainer";
import HookCakeContainer from "./components/HooksCakeComponent";
import InputContainer from "./components/inputContainer";
import UseContainer from "./components/useContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UseContainer />
      </div>
    </Provider>
  );
}

export default App;
