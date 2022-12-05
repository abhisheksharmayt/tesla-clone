import React, { useEffect, useState } from 'react'
import { productsInfo } from '../data/products-info';
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useGlobalContext } from '../globalContext';
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);
  const {cart, empty} = useGlobalContext();
  console.log(empty, cart);
  useEffect(() => {
    let total = 0;
    const items = productsInfo.filter((curr) => {
      for (let c of cart) {
        if (c == curr.url) {
          total += curr.priceNum;
          return curr;
        }
      }
    })
    setTotalPrice(total);
    setCartItems(items);
  }, [cart])
  return (
    <main className='flex flex-col lg:block items-center pt-24 p-5 sm:pt-24 sm:p-16  md:p-24 lg:pt-24 lg:p-10 lg:h-screen w-screen font-Monst'>
      <h1 className='text-3xl font-medium mb-3 max-w-xl w-full'>Cart</h1>
      {
        (empty) ? (
          <div className='flex flex-col justify-center items-center text-center my-5 h-36 w-full'>
            <h2 className='my-5 font-medium'>Your Cart is Empty</h2>
            <a href="/" className='bg-blue-600 text-white font-medium py-3 max-w-md w-full rounded-lg'>
              <button>Continue Shopping</button>
            </a>
          </div>
        ) : (
          <section className='flex flex-col lg:flex-row max-w-xl lg:max-w-full'>
            <div className='w-full h-fit mt-5 lg:h-full border-t pb-5 border-gray-300 lg:w-2/3'>
              {
                cartItems.map((curr) => {
                  const { id, title, img, about, price } = curr;
                  return (
                    <div key={id} className='flex p-5 border-b w-full'>
                      <div className='rounded-lg overflow-hidden w-1/3'>
                        <img className='h-full w-full object-cover' src={img} alt={title} />
                      </div>
                      <div className='w-2/3 pl-4 text-gray-700'>
                        <div className='flex justify-between'>
                          <h2 className='font-medium'>{title}</h2>
                          <p className='font-medium'>{price}</p>
                        </div>
                        <p className='my-3 text-sm text-gray-500 h-24 overflow-hidden text-ellipsis'>{about}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className='flex flex-col items-start bg-white min-h-36 p-10 font-Monst text-center sm:p-16 md:p-20 lg:p-8 lg:px-5 w-full h-fit lg:overflow-auto lg:h-full lg:m-3 lg:mt-10 lg:w-1/3 lg:shadow-lg'>
              <h3 className='text-lg font-medium'>Order Summary</h3>
              <ul className='w-full my-5 text-sm'>
                <li className='flex justify-between text-gray-600 font-medium pb-3'>
                  <p>Shipping</p>
                  <p>Free</p>
                </li>
                <li className='flex justify-between text-gray-600 font-medium'>
                  <p className='flex items-center gap-2'>Sales Tales <AiOutlineInfoCircle /></p> <p>Calculated at checkout</p>
                </li>
              </ul>
              <div className='text-lg flex justify-between font-medium w-full '>
                <p>Subtotal</p>
                <p>${totalPrice}</p>
              </div>
            <a href="#" className='bg-blue-600 text-white font-medium py-3 mt-10 max-w-md w-full rounded-lg'>
              <button>Checkout</button>
            </a>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default Cart