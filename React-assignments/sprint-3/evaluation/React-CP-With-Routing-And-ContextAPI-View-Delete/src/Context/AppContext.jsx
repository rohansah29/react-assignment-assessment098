import {createContext,useState} from "react";

export const AppContext=createContext();

const AppContextProvider = ({children}) => {
  const [isAuth,setIsAuth]=useState(false);
  const [username,setUserName]=useState(null);
  let providerState = {
    // authState:{isAuth:false,username:null},
    // loginUser:()=>{({isAuth:true,username:username})},
    // logoutUser:()=>{({isAuth:false,username:null})}
  };

  if (window.Cypress) {
    window.store = providerState;
  }

  return <AppContext.Provider value={providerState}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
