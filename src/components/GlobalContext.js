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
      setContext({ touch: true })
      document.removeEventListener('touchstart', onFirstTouch);
    }

    // handle touch event
    document.addEventListener('touchstart', onFirstTouch);

  },[])

  return (
    <GlobalContext.Provider value={context}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, useGlobalContext }
