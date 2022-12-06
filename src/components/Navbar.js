import React, { useEffect, useState } from 'react'
import { productsInfo } from '../data/products-info'
import tesla_logo from '../images/tesla-logo.svg'
import { useGlobalContext } from '../globalContext'
import { useLocation, Link } from 'react-router-dom'
const Navbar = () => {
    const { isMenuOpen, openMenu, cart } = useGlobalContext();
    const [isNavbarBlur, setIsNavbarBlur] = useState(false);
    const { pathname } = useLocation();
    useEffect(() => {
        if (pathname !== '/') {
            setIsNavbarBlur(false);
        }
        else {
            setIsNavbarBlur(true);
        }
    });
    // console.log(isMenuOpen);
    return (
        <nav className={`fixed w-full py-3 flex justify-between ${(isNavbarBlur) ? ('') : ('bg-white/90 backdrop-blur-sm')}`}>
            <div className="logo">
                <Link to='/'>
                    <img src={tesla_logo} alt="tesla_logo" className='pl-6 h-8 w-40' />
                </Link>
            </div>
            <div className="nav-btns items-center hidden lg:flex">
                {
                    productsInfo.map((product) => {
                        const { id, title, url } = product;
                        return (
                            (isNavbarBlur) ?
                                (
                                    <a key={id} className='px-3 py-2 rounded-md mx-2' href={`#${url}`}>
                                        {title}
                                    </a>
                                ) :
                                (
                                    <Link key={id} className='px-3 py-2 rounded-md mx-2' to={`/product/${url}`}>
                                        {title}
                                    </Link>
                                )
                        )
                    })
                }
            </div>
            <div className="nav-shop pr-10 flex">
                <Link className='relative' to='/cart'>
                    <div className='absolute right-0 top-1 text-center rounded-full h-4 w-4 bg-red-500 text-white text-xs'>
                        {cart.length}
                    </div>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="h-8 w-8 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z"></path></svg>
                </Link>
                <button className='ml-8 px-4 rounded-md text-sm font-medium block lg:hidden bg-black/10 backdrop-blur-sm'
                    onClick={openMenu}>Menu</button>
            </div>
        </nav>
    )
}

export default Navbar