import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { updateTotalCartQty } from '../Main/contentSlice'
import { removeFromCart } from './cartSlice'

import IconDelete from '../../assets/images/icon-delete.svg'

const Cart = () => {
  const cart = useAppSelector((state) => state.cart)
  const orders = Array.from(Object.keys(cart))
  console.log(orders)
  const dispatch = useAppDispatch()
  const totalCartQty = useAppSelector((state) => state.main.totalCartQty)

  return (
    <div className=' absolute z-50 flex flex-col items-center gap-8 shadow-xl rounded-b-2xl pb-6 bg-white md:right-28 top-28 w-[350px] min-h-[33rem] sm:min-h-[20rem] sm:w-[30rem] '>
      <div className='border-b-2 border-gray-200 items-center w-full'>
        <h3 className='pt-5 font-bold text-2xl text-gray-700 h-20 px-5'>
          Cart
        </h3>
      </div>
      {totalCartQty && orders.length ? (
        <ul className='flex flex-col gap-4 w-full px-4'>
          {orders.map((item) => (
            <li key={item} className='w-full'>
              <div className='flex items-center text-lg justify-between text-gray-500 font-bold '>
                <img
                  src={cart[item].imageSrc}
                  alt='Product-Thubnail'
                  className='w-[4rem] rounded-[.4rem]'
                />
                <div className='rounded-[.4rem]'>
                  <p className='w-full'>{item}</p>
                  <p>
                    {cart[item].markedPrice} X {cart[item].qtyOrdered} = &nbsp;
                    <span className='font-extrabold'>
                      $
                      {Number(cart[item].markedPrice?.substring(1)) *
                        cart[item].qtyOrdered}
                      .00
                    </span>
                  </p>
                </div>
                <img
                  src={IconDelete}
                  alt='Trash'
                  className='cursor-pointer'
                  onClick={() => {
                    dispatch(removeFromCart(item))
                    dispatch(updateTotalCartQty(-cart[item].qtyOrdered))
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-gray-500 text-xl font-bold mt-[8rem] sm:mt-[4rem]'>
          Your cart is empty.
        </p>
      )}
      {totalCartQty && orders.length ? (
        <div className='px-4 w-full mt-auto'>
          <button className='flex items-center text-gray-50 bg-orange-500 font-bold border-none text-2xl w-full px-6 py-6 rounded-xl sm:py-4 h-16 justify-center cursor-pointer hover:bg-orange-400'>
            Checkout
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Cart
