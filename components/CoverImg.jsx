import React from 'react'
import Image from 'next/image'
const CoverImg = ({containerStyles, imgSrc}) => {
  return (
      <div className={`${containerStyles}`}><Image src={imgSrc} fill priority alt =''/></div>
  )
}

export default CoverImg