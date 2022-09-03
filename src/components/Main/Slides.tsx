import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { togglePictureIndex } from './contentSlice'

import productImg1 from '../../assets/images/image-product-1-thumbnail.jpg'
import productImg2 from '../../assets/images/image-product-2-thumbnail.jpg'
import productImg3 from '../../assets/images/image-product-3-thumbnail.jpg'
import productImg4 from '../../assets/images/image-product-4-thumbnail.jpg'

const images = [
  { id: 1, image: productImg1 },
  { id: 2, image: productImg2 },
  { id: 3, image: productImg3 },
  { id: 4, image: productImg4 },
]

const Slides = () => {
  const pictureIndex = useAppSelector((state) => state.main.pictureIndex)
  const dispatch = useAppDispatch()
  return (
    <div>
      <div className='hidden sm:flex gap-[2rem] justify-between max-w-[45rem]'>
        {images.map(({ image, id }) =>
          // console.log(images)
          pictureIndex ? (
            <span
              className={`border-2 border-${
                pictureIndex === id
                  ? 'orange-500'
                  : 'transparent cursor-pointer hover:opacity-75'
              } rounded-2xl`}
            >
              <img
                src={image}
                alt='Product-1'
                className={`w-[10rem] rounded-2xl object-cover `}
                onClick={() => dispatch(togglePictureIndex(id))}
              />
            </span>
          ) : null
        )}
        {/* <span
          className={`border-2 border-${
            pictureIndex === 1
              ? 'orange-500'
              : 'transparent cursor-pointer hover:opacity-75'
          } rounded-2xl`}
        >
          <img
            src={productImg1}
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
        </span> */}
      </div>
    </div>
  )
}

export default Slides
