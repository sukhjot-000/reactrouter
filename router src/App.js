import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">header</div>
      <Outlet />
      <div className="App">footer</div>
    </>
  );
}

export default App;
