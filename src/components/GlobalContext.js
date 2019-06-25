import React, { useContext, useEffect, useState } from 'react'

const initial = {
  touch: false
};

const GlobalContext = React.createContext(initial);
const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {

  const [ context, setContext] = useState({ ...initial });

  useEffect(() => {

    const onFirstTouch = () => {
      setContext({ ...context, touch: true })
      window.removeEventListener('touchstart', onFirstTouch, false);
    }

    // handle touch event
    window.addEventListener('touchstart', onFirstTouch, false);
    return window.removeEventListener('touchstart', onFirstTouch, false);

  },[ context ])

  return (
    <GlobalContext.Provider value={context}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, useGlobalContext }
