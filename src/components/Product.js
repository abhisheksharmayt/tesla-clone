import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productsInfo } from '../data/products-info';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
const Product = () => {
  const { name } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const data = productsInfo.find((curr) => curr.url === name);
    if (data !== null) {
      setLoading(false);
      setProduct(data);
    }
  }, [])
  if (loading) {
    return <div className='pt-10 text-center'>loading..</div>
  }
  const { id, title, rating, url, img, delivery, feature, about, price, inStock, highlights} = product;
  return (
    <main className='pt-24 p-5 sm:pt-24 sm:p-16  md:p-24 lg:pt-24 lg:p-10 lg:h-screen w-screen flex flex-col lg:flex-row'>
      <div className='w-full h-fit lg:h-full overflow-hidden rounded-2xl'>
        <img className='h-full w-full object-cover object-center' src={img} alt={title} />
      </div>
      <div className='flex flex-col items-center bg-white min-h-36 p-10 sm:p-16 md:p-20 lg:p-10 rounded-b-2xl w-full h-fit lg:overflow-auto lg:h-full lg:w-3/5 font-Monst text-center'>
        <div className='max-w-xl'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-medium'>{title}</h1>
          <p className='pt-3 text-gray-600 font-sans'>{rating}</p>
          <p className='py-4 text-gray-500 font-medium'>
            Est. Delivery: {delivery}
          </p>
          <Feature feature={feature} />
          <p className='mt-10 text-start text-gray-700 font-normal'>{about}</p>
          <p className='text-start mt-5 font-semibold'>
            Dual Motor All-Wheel Drive
          </p>
          <div className='flex justify-between items-center mt-6 py-3 px-5 border-blue-500 border-solid border-3 rounded-md font-semibold text-sm'>
            <h4>{title}</h4>
            <p className=''>{price}</p>
          </div>
          <StockInfo inStock={inStock}/>
          <Highlights highlights={highlights}/>
          <div className='text-start mt-10'>
            <p className='font-medium'>Share</p>
            <div className="flex gap-10 text-2xl my-5 text-gray-500">
              <a href="#" className='hover:text-gray-700'><BsFacebook></BsFacebook></a>
              <a href="#" className='hover:text-gray-700'><BsInstagram></BsInstagram></a>
              <a href="#" className='hover:text-gray-700'><BsTwitter></BsTwitter></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const Feature = ({ feature }) => {

  return (
    <ul className="flex justify-around md:justify-evenly mt-5">
      {feature.map((curr) => {
        const { value, suffix, info } = curr;
        return (
          <li>
            <div className='pb-2'>
              <span className='text-lg font-medium sm:text-2xl'>{value}</span>
              <span className='text-sm font-medium ml-1'>{suffix}</span>
            </div>
            <div>
              <p className='text-xs text-gray-500'>{info}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

const StockInfo = ({inStock})=>{
  return (
    <div className='text-start mt-6'>
      {
        (inStock)
          ?
          <p className='flex gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="flex-shrink-0 h-5 w-5 text-green-500"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>In Stock!
          </p>
          :
          <p className='flex gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="flex-shrink-0 h-5 w-5 text-gray-300"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>Out Of Stock!
          </p>
      }
      <button className='bg-blue-600 hover:bg-blue-700 w-60 my-6 py-3 text-white font-medium rounded-lg disabled:bg-blue-300' disabled={!inStock}>Add To Cart</button>
    </div>
  )
}

const Highlights = ({highlights})=>{
  return(
    <div className='text-start py-8 border-y-2 mt-5'>
      <h5 className='font-semibold'>Highlights</h5>
      <ul className='py-3 px-5 list-disc text-gray-600 text-sm'>
        {
          highlights.map((curr, index)=>{
            return(
              <li key={index} className='p-1'>{curr}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Product