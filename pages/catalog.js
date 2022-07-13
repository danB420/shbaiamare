import React from 'react'

import {Navbar,HeroBanner,Footer, FooterBanner,ProductLayout,Product} from "../components"

import {client} from '../lib/client'; 
const Catalog = ({products,bannerData}) => {
  return (
    <div className='global-wrapper'>
    {console.log(products)}
    
    <Navbar/>
    <div className='product-container'>
      {products?.map((product)=><Product
      key={product.id} product={product}
      />)}
    </div>
    <Footer/>
    </div>
   
    
  )
};

export const getServerSideProps = async () =>{
  const query='*[_type=="product"]';
  const products =await client.fetch(query);
  
  const bannerQuery='*[_type=="banner"]';
  const bannerData =await client.fetch(bannerQuery);

  return {
    props:{products,bannerData}
  }
}

export default Catalog;