import React from 'react'
import { productsInfo } from '../data/products-info'
import { useParams, Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className='bg-gray-100 h-screen w-screen overflow-scroll scroll-smooth snap-y snap-mandatory'>
            {
                productsInfo.map((product) => {
                    const { id, title, url, img, short_desc } = product;
                    return (
                        <div key={id} id={url} className="h-full w-full snap-start bg-cover bg-center flex flex-col items-center justify-between" style={{ backgroundImage: `url(${img})` }}>
                            {/* <img src={img} className="h-full w-full snap-start object-cover" alt="" /> */}
                            <div>
                                <h1 className='m-3 mt-28 text-4xl text-center font-medium'>{title}</h1>
                                <p className='text-sm'>{short_desc}</p>
                            </div>
                            <div className='mb-32 flex flex-col sm:flex-row'>
                                <Link className='py-3 px-16 mx-4 my-2 rounded-md bg-gray-800 text-sm text-white' to={`/product/${url}`}>Custom Order</Link>
                                <Link className='py-3 px-14 mx-4 my-2 rounded-md bg-gray-200 text-sm' to='/cart'>
                                    Existing Inventory
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Hero