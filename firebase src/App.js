import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import UserContextProvider from "./context/UserContextProvider";
import UserContext from "./context/UserContext";
import { useContext } from "react";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <SignUp />
        <SignIn />
        <UserDetails />
      </div>
    </UserContextProvider>
  );
}

const UserDetails = () => {
  const { user } = useContext(UserContext);
  return user ? <p>{user}</p> : null;
};

export default App;
