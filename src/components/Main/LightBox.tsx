import React, { useState } from 'react'
import productImg1 from '../../assets/images/image-product-1-thumbnail.jpg'
import productImg2 from '../../assets/images/image-product-2-thumbnail.jpg'
import productImg3 from '../../assets/images/image-product-3-thumbnail.jpg'
import productImg4 from '../../assets/images/image-product-4-thumbnail.jpg'
import nextIcon from '../../assets/images/icon-next.svg'
import prevIcon from '../../assets/images/icon-previous.svg'

const images = [
  { id: 1, image: productImg1 },
  { id: 2, image: productImg2 },
  { id: 3, image: productImg3 },
  { id: 4, image: productImg4 },
]

const LightBox = () => {
  const [slide, setSlide] = useState(1)

  const onChangeSlide = (direction: string) => {
    if (direction === 'left') {
      setSlide(slide !== 1 ? slide - 1 : 3)
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
    <div>
      <div className='max-w-[40rem] relative '>
        <div className='absolute top-[50%] translate-[50%] flex justify-between px-4 w-full sm:hidden overflow-x-hidden'>
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
          className={`flex justify-center items-center transition-all ease-in-out duration-1000`}
          // style={{ transform: `translateX(${-5 * slide}%)` }}
        >
          {images.map(({ image, id }) => {
            // console.log(images)
            return id === slide ? (
              <div key={id} className='w-[100vw] sm:hidden '>
                <img
                  // ref={imgRef}
                  src={image}
                  alt='products'
                  className='object-center w-[40rem] h-full rounded-2xl'
                />
              </div>
            ) : null
          })}
        </div>
      </div>
    </div>
  )
}

export default LightBox
