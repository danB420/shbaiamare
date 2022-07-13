import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


import catalog from '../icons/catalog.png'
import home from '../icons/home.png'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link href='/'>
      <p id='branding'>shbaiamare</p>
      </Link>

     

      <div className="nav-link-container">
        <Link className="button-wrapper" href="/catalog" >
          <button type="button" className="nav-link">
            <div className='nav-bar-icon'>
            <Image src={catalog} width={36} height={30}/>
            </div>
            </button>
        </Link>
        <span id="button-spacer">
        </span>
        <Link href="/"  >
          <button type="button" className="nav-link" >
            <div className='nav-bar-icon'>
            <Image src={home} width={36} height={30}/>
            </div>
          </button>
        </Link>

      </div>
    </div>
  )
}

export default Navbar