import React from 'react'
import LeftContents from './LeftContents'
import LightBox from './LightBox'
import ProductDetails from './ProductDetails'

const Contents = () => {
  return (
    <div className='max-w-[105rem] mx-auto px-8 py-24 grid justify-center sm:grid-cols-2'>
      <LeftContents />
      <ProductDetails />
      {/* <LightBox /> */}
    </div>
  )
}

export default Contents
