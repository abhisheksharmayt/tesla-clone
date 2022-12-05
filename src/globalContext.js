import React, {useState, useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const AppContext = React.createContext();

export const AppProvider = ({children}) =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [empty, setEmpty] = useState(true);
    const addToCart = (item)=>{
        if(!cart.includes(item)){
            setCart([...cart, item]);
            setEmpty(false);
        }
        console.log(empty);
    }
    const removeFromCart = (item)=>{
        const newCart = cart.filter((curr)=> curr!=item);
        if(newCart.length == 0) setEmpty(true);
        setCart(newCart);
    }
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
            closeMenu,
            cart,
            addToCart,
            removeFromCart,
            empty
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}