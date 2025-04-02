import "./App.css";
import Auth from "./components/auth/auth";

import useInput from "./store";

function App() {
  const [value, setValue] = useInput();
  return (
    <div className="App">
      <h1>Remote Application</h1>
      <Auth />
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
