import React from 'react'
import { useGlobalContext } from '../globalContext'
import { productsInfo } from '../data/products-info';
const Menu = () => {
    const { closeMenu } = useGlobalContext();
    return (
        <div className='fixed z-10 right-0 inset-y-0 bg-white w-80 p-8'>
            <div className="flex justify-end">
                <button className='hover:bg-black/5 p-2 rounded-md' onClick={closeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="24" height="24"
                        viewBox="0 0 24 24">
                        <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                    </svg>
                </button>
            </div>
            <ul className='mt-10 px-3'>
                {
                    productsInfo.map((product) => {
                        const { id, url, title } = product;
                        return (
                            <li key={id} className='px-4 py-2 my-2 rounded-md text-sm hover:bg-gray-100'>
                                <a href={`/${url}`}>
                                    {title}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Menu