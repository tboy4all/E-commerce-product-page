import React, { useRef } from 'react'
import { useAppSelector } from '../../app/hooks'
import LightBox from './LightBox'
import Slides from './Slides'

const LeftContents = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  const pictureIndex = useAppSelector((state) => state.main.pictureIndex)

  return (
    <div className=' flex flex-col gap-10 h-full w-full'>
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

      <LightBox />

      {/* Slide on the left content */}
      <Slides />
    </div>
  )
}

export default LeftContents
