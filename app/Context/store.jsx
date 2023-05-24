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
  const [userData, setUserData] = useState({
    admin: { user: "Manish", userId: 0, role: "admin", password: "1234" },
    user: {},
    artist: {},
    songs: {},
  });

  return (
    <AMSContext.Provider value={{ userData, setUserData }}>
      {children}
    </AMSContext.Provider>
  );
};
export const useAMSContext = () => useContext(AMSContext);
