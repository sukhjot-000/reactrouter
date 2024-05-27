import React, { useEffect } from "react";

// Create the context
const UserContext = React.createContext();

// Define the provider component
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  useEffect(() => {
    console.log("object");
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Export both the context and the provider
export { UserContext, UserContextProvider };
