import React from 'react'
import { productsInfo } from '../data/products-info'

const Hero = () => {
    return (
        <div className='bg-gray-100 h-screen w-screen overflow-scroll scroll-smooth snap-y snap-mandatory'>
            {
                productsInfo.map((product) => {
                    const { id, title, url, img, short_desc } = product;
                    return (
                        <div key={id} id={title} className="h-full w-full snap-start bg-cover bg-center flex flex-col items-center justify-between" style={{ backgroundImage: `url(${img})` }}>
                            {/* <img src={img} className="h-full w-full snap-start object-cover" alt="" /> */}
                            <div>
                                <h1 className='m-3 mt-28 text-4xl text-center'>{title}</h1>
                                <p className='text-sm'>{short_desc}</p>
                            </div>
                            <div className='mb-32 flex flex-col sm:flex-row'>
                                <a className='py-3 px-16 mx-4 my-2 rounded-md bg-gray-800 text-sm text-white' href={`/${url}`}>Custom Order</a>
                                <a className='py-3 px-14 mx-4 my-2 rounded-md bg-gray-200 text-sm' href={`/cart`}>Existing Inventory</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Hero