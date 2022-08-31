import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { incrementQty, decrementQty, updateTotalCartQty } from './contentSlice'
import { CartItem } from '../cart/cartSlice'
import { addToCart } from '../cart/cartSlice'
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
import cartImg from '../../assets/images/image-product-1-thumbnail.jpg'

const ProductDetails = () => {
  const itemNameRef = useRef<HTMLHeadingElement>(null)
  const itemPriceRef = useRef<HTMLParagraphElement>(null)

  const qtyOrdered = useAppSelector((state) => state.main.qtyOrder)

  type addItemPayloadType = {
    key: string | null
    data: CartItem
  }

  const itemName = itemNameRef.current && itemNameRef.current.textContent
  const itemPrice = itemPriceRef.current && itemPriceRef.current.textContent
  const imgSrc = cartImg

  const addItemPayload: addItemPayloadType = {
    key: itemName,
    data: {
      markedPrice: itemPrice,
      qtyOrdered: qtyOrdered,
      imageSrc: imgSrc,
    },
  }

  const qtyOrder = useAppSelector((state) => state.main.qtyOrder)
  const dispatch = useAppDispatch()
  const cart = useAppSelector((state) => state.cart)

  const totalQty = Object.values(cart).reduce(
    (acc: number, next: CartItem): number => {
      acc += next.qtyOrdered
      return acc
    },
    0
  )
  return (
    <div className='flex flex-col gap-[2.5rem] text-left py-[7rem] w-[36rem] sm:py-[3.5rem] sm:gap-6 sm:px-[4rem] sm:w-full md:py-[7rem]'>
      <h5 className='font-bold text-primaryDark uppercase tracking-[.2rem] text-[1rem]'>
        Sneaker Company
      </h5>
      <h1
        ref={itemNameRef}
        className='text-5xl md:text-6xl font-bold text-secondaryDark'
      >
        Fall Limited Edition Sneakers
      </h1>
      <p className=' text-[1.6rem] text-tertiaryDark md:text-[1.7rem] md:mt-6'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className='flex justify-between w-[35rem] sm:flex-col'>
        <div className='flex gap-8'>
          <p
            ref={itemPriceRef}
            className='font-bold text-[2rem]  text-secondaryDark tracking-tighter md:text-[2.7rem]'
          >
            $125.00
          </p>
          <span className='font-bold text-xl text-primaryDark pt-[0.2rem] h-10 w-16 bg-orange-100 rounded-[.5rem] mt-4 text-center  md:text-2xl'>
            50%
          </span>
        </div>
        <p className='font-bold text-gray-400 text-2xl line-through sm:mt-[.2rem]'>
          $250.00
        </p>
      </div>

      {/* minus, plus and add to cart */}
      <div className='flex flex-col justify-between gap-6 max-w-[35rem] sm:flex-row sm:gap-3'>
        <div className='flex justify-between gap-10 h-20 p-6 text-primaryDark bg-gray-100 rounded-[1rem] w-[35rem] sm:justify-center sm:h-16 sm:py-4 sm:w-[15rem]'>
          <AiOutlineMinus
            size={20}
            className='cursor-pointer'
            // onClick={() => (qtyOrder > 0 ? dispatch(decrementQty()) : '0')}
            onClick={() => qtyOrder && dispatch(decrementQty())}
          />

          <p className='text-gray-800 font-bold text-2xl'>{qtyOrder}</p>
          <AiOutlinePlus
            size={20}
            className='cursor-pointer'
            onClick={() => dispatch(incrementQty())}
          />
        </div>
        <button
          className='flex gap-3 text-gray-50 bg-orange-500 font-bold border-none text-2xl w-[35rem] rounded-[1rem] sm:w-[20rem] px-4 py-6 sm:py-4 h-20 sm:h-16 justify-center cursor-pointer hover:bg-orange-400'
          onClick={() => {
            dispatch(addToCart(addItemPayload))
            dispatch(updateTotalCartQty(qtyOrder))
          }}
        >
          <AiOutlineShoppingCart size={20} />
          <span className='w-[10rem]'>Add to Cart </span>
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
