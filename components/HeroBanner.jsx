import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import arrow from '../icons/arrow.png'
const HeroBanner = () => {
  return (
    <div className="banner-blurred">
      <div className="banner">
        <Link href='/catalog'>
          <button type="button" id='banner-btn'>
            
            <p>Catalog</p>
            
            <Image src={arrow} height={36} width={52} />
          
            
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HeroBanner