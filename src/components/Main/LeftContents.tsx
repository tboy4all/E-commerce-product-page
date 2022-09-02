import React, { useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { togglePictureIndex } from './contentSlice'
// import productImg1 from '../../assets/images/image-product-1.jpg'
import productImgth from '../../assets/images/image-product-1-thumbnail.jpg'
import productImg2 from '../../assets/images/image-product-2-thumbnail.jpg'
import productImg3 from '../../assets/images/image-product-3-thumbnail.jpg'
import productImg4 from '../../assets/images/image-product-4-thumbnail.jpg'
import nextIcon from '../../assets/images/icon-next.svg'
import prevIcon from '../../assets/images/icon-previous.svg'
// import LightBox from './LightBox'

const images = [
  { id: 1, image: productImgth },
  { id: 2, image: productImg2 },
  { id: 3, image: productImg3 },
  { id: 4, image: productImg4 },
]

const LeftContents = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  const pictureIndex = useAppSelector((state) => state.main.pictureIndex)
  const dispatch = useAppDispatch()
  const [slide, setSlide] = useState(1)

  const onChangeSlide = (direction: string) => {
    if (direction === 'left') {
      setSlide(slide !== 1 ? slide - 1 : 3)
      // dispatch(togglePictureIndex)
    }

    if (direction === 'right') {
      setSlide(slide === 3 ? 1 : slide + 1)
    }
  }

  // const prev = () => {
  //   if (slide === 0) return
  //   setSlide(slide - 1)
  // }

  // const next = () => {
  //   if (slide === 3) return
  //   setSlide(slide + 1)
  // }

  return (
    <div className='flex flex-col gap-10 h-full w-full'>
      <div className='hidden sm:flex max-w-[35rem] sm:max-w-[45rem] relative'>
        <img
          ref={imgRef}
          // src={`${pictureIndex}.jpg`}
          src={require(`../../assets/images/image-product-${pictureIndex}.jpg`)}
          alt='Product img'
          className='rounded-2xl h-full w-full object-cover'
        />
      </div>

      {/* LightBox */}

      <div className='max-w-[40rem] relative '>
        <div className='absolute top-[50%] translate-[50%] flex justify-between px-4 w-full sm:hidden'>
          <span
            onClick={() => onChangeSlide('left')}
            className='bg-white h-[4rem] w-[4rem] flex justify-center items-center rounded-full '
          >
            <img src={prevIcon} alt='prev' />
          </span>
          <span
            onClick={() => onChangeSlide('right')}
            className='bg-white h-[4rem] w-[4rem] flex justify-center items-center rounded-full'
          >
            <img src={nextIcon} alt='next' />
          </span>
        </div>
        <div
          className={` transition-all ease-in-out duration-1000`}
          // style={{ transform: `translateX(${-100 * slide}vw)` }}
        >
          {images.map(({ image, id }) => {
            console.log(images)
            return id === slide ? (
              <div key={id} className='w-[100vw] sm:hidden '>
                <img
                  // ref={imgRef}
                  src={image}
                  alt='products'
                  className='object-center w-[40rem]  h-full rounded-2xl'
                />
              </div>
            ) : null
          })}
        </div>
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
