

import { createContext } from "react";

const MusicPlayerDisplayContext = createContext(true);

const MusicPlayerDisplayProvider = ({children}) => {
  return (
    <MusicPlayerDisplayContext.Provider value={true}>{children}</MusicPlayerDisplayContext.Provider>
  )
}

export {MusicPlayerDisplayContext, MusicPlayerDisplayProvider}