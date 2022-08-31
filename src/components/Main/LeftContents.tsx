import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { togglePictureIndex } from './contentSlice'
// import productImg1 from '../../assets/images/image-product-1.jpg'
import productImgth from '../../assets/images/image-product-1-thumbnail.jpg'
import productImg2 from '../../assets/images/image-product-2-thumbnail.jpg'
import productImg3 from '../../assets/images/image-product-3-thumbnail.jpg'
import productImg4 from '../../assets/images/image-product-4-thumbnail.jpg'

const LeftContents = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  const pictureIndex = useAppSelector((state) => state.main.pictureIndex)
  const dispatch = useAppDispatch()
  return (
    <div className='flex flex-col gap-10 h-full w-full'>
      <div className='max-w-[35rem] sm:max-w-[45rem] relative'>
        <img
          ref={imgRef}
          // src={`${pictureIndex}.jpg`}
          src={require(`../../assets/images/image-product-${pictureIndex}.jpg`)}
          alt='Product img'
          className='rounded-2xl h-full w-full object-cover'
        />
      </div>
      <div className='hidden sm:flex gap-[2rem] justify-between max-w-[45rem]'>
        <span
          className={`border-2 border-${
            pictureIndex === 1
              ? 'orange-500'
              : 'transparent cursor-pointer hover:opacity-75'
          } rounded-2xl`}
        >
          <img
            src={productImgth}
            alt='Product-1'
            className={`w-[10rem] rounded-2xl object-cover `}
            onClick={() => dispatch(togglePictureIndex(1))}
          />
        </span>
        <span
          className={`border-2 border-${
            pictureIndex === 2
              ? 'orange-500'
              : 'transparent cursor-pointer hover:opacity-75'
          } rounded-2xl`}
        >
          <img
            src={productImg2}
            alt='Product-2'
            className={`w-[10rem] rounded-2xl object-cover `}
            onClick={() => dispatch(togglePictureIndex(2))}
          />
        </span>
        <span
          className={`border-2 border-${
            pictureIndex === 3
              ? 'orange-500'
              : 'transparent cursor-pointer hover:opacity-75'
          } rounded-2xl`}
        >
          <img
            src={productImg3}
            alt='Product-1'
            className={`w-[10rem] rounded-2xl object-cover `}
            onClick={() => dispatch(togglePictureIndex(3))}
          />
        </span>
        <span
          className={`border-2 border-${
            pictureIndex === 4
              ? 'orange-500'
              : 'transparent cursor-pointer hover:opacity-75'
          } rounded-2xl`}
        >
          <img
            src={productImg4}
            alt='Product-1'
            className={`w-[10rem] rounded-2xl object-cover `}
            onClick={() => dispatch(togglePictureIndex(4))}
          />
        </span>
      </div>
    </div>
  )
}

export default LeftContents
