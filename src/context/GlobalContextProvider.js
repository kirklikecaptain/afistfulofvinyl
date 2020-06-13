import React, { createContext, useReducer } from 'react';

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const initialState = {
  theme: 'light',
  userIsLoggedIn: true,
  userProfile: {
    name: 'Kirk Hodgman',
    avatar:
      'https://avatars3.githubusercontent.com/u/5226909?s=460&u=330f6adf0ad492e8e612bfc3d92957c820d5f083&v=4'
  }
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    }
    case 'TOGGLE_AUTH': {
      return {
        ...state,
        userIsLoggedIn: !state.userIsLoggedIn
      };
    }
    default:
      throw new Error(`${action.type} is not a valid action`);
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
