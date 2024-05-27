import React, { useContext } from "react";
import Part2 from "./Part2";
import { UserContext } from "../context/UserContext";

function Part1() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user && `<p>${user}</p>`}
      <Part2 />
    </div>
  );
}

export default Part1;
