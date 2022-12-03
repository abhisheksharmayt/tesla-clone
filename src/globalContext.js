import React, {useState, useContext} from 'react'

const AppContext = React.createContext();

export const AppProvider = ({children}) =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openMenu = ()=>{
        setIsMenuOpen(true);
    }
    const closeMenu = ()=>{
        setIsMenuOpen(false);
    }
    return(
        <AppContext.Provider
        value={{
            isMenuOpen,
            openMenu,
            closeMenu 
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}