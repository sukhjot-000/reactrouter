import logo from "./logo.svg";
import "./App.css";
import Part1 from "./components/Part1";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Part1 />
      </div>
    </UserContextProvider>
  );
}

export default App;
