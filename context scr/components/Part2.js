import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Part2() {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const setUsername = () => {
    setUser(name);
  };
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={setUsername}>enter</button>
    </div>
  );
}

export default Part2;
