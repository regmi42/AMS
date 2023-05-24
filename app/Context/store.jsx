"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

const AMSContext = createContext({});

export const AMSContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([
    {
      userId: 1,
      username: "bhupesh",
      role: "user",
      password: "123",
      firstname: "Bhupesh",
      lastname: "Regmi",
    },
    {
      userId: 2,
      username: "Ram",
      role: "artist",
      password: "123",
      firstname: "Ram",
      lastname: "Prasad",
    },

    {
      userId: 0,
      username: "Manish",
      role: "admin",
      password: "123",
      firstname: "Manish",
      lastname: "Regmi",
    },
  ]);

  return (
    <AMSContext.Provider value={{ userData, setUserData }}>
      {children}
    </AMSContext.Provider>
  );
};
export const useAMSContext = () => useContext(AMSContext);
