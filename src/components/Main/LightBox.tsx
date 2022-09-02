import React, { useState } from 'react'
import productImgth from '../../assets/images/image-product-1-thumbnail.jpg'
import productImg2 from '../../assets/images/image-product-2-thumbnail.jpg'
import productImg3 from '../../assets/images/image-product-3-thumbnail.jpg'
import productImg4 from '../../assets/images/image-product-4-thumbnail.jpg'
import nextIcon from '../../assets/images/icon-next.svg'
import prevIcon from '../../assets/images/icon-previous.svg'

const images = [
  { id: 1, image: productImgth },
  { id: 2, image: productImg2 },
  { id: 3, image: productImg3 },
  { id: 4, image: productImg4 },
]

const LightBox = () => {
  const [slide, setSlide] = useState(0)

  const changeSlide = (direction: any) => {
    if (direction === 'l') {
      setSlide(slide !== 0 ? slide - 1 : 3)
    }

    if (direction === 'r') {
      setSlide(slide === 3 ? 0 : slide + 1)
    }
  }
  return (
    <div>
      <section className='md:hidden w-screen relative overflow-x-hidden pt-12'>
        <div
          className={`w-[400vw] flex items-center justify-center transition-all ease-in-out duration-1000`}
          style={{ transform: `translateX(${-100 * slide}vw)` }}
        >
          {images.map(({ image, id }) => (
            <div key={id} className='w-[100vw]'>
              <img src={image} alt='pix' className='object-center' />
            </div>
          ))}
        </div>

        <div className='absolute w-full flex justify-between '>
          <div
            className='bg-white h-8 w-8 rounded-full flex items-center justify-center'
            onClick={() => changeSlide('l')}
          >
            <img src={prevIcon} alt='prev' className='h-3' />
          </div>
          <div
            className='bg-white h-8 w-8 rounded-full flex items-center justify-center'
            onClick={() => changeSlide('r')}
          >
            <img src={nextIcon} alt='next' className='h-3' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default LightBox
