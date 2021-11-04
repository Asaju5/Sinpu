import { createContext, useEffect, useReducer } from "react";

const initState = {
  user: null,
};

const Context = createContext();

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initState);

  useEffect(() => {
    dispatch({
        type: "LOGIN",
        payload: JSON.parse(window.localStorage.getItem('user'))
    })
  }, [])

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
