import React from 'react'

const FooterBanner = () => {
  return (
      <div className="footer-banner">
        <p id='newsletter'>Abonează-te la newsletter</p>
        
        <form className='footer-input'>
          
          <input
          type="email"
          id="e-mail"
          name="e-mail"
          title="Enter a valid e-mail address"
          placeholder='e-mail'
          
          />
        </form>
      </div>
  )
}

export default FooterBanner