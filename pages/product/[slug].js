import React from 'react';
import {useState} from 'react' ;

import Image from 'next/image';
import phonew from '../../icons/phonew.png';
import {client,urlFor} from '../../lib/client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ProductDetails = ({product,products}) => {
  
const {image,name,price,details} = product;

const [index,setIndex]=useState(0);
   return (
    
    <div>
        <Navbar/>
        <div className='product-detail-container'>
            <div className='product-detail-wrapper'>
                <div  className='product-image-wrapper'>
                    <img  src={urlFor(image && image[index])} 
                    alt="product-image"
                    width={450}
                    height={450}
                    className='product-detail-image'
                    />
                    <div className="small-images-container">
                    {
                        image?.map((item,i)=>(
                            <img src={urlFor(item)}
                            className={i === index ? 'small-image selected-image' : 'small-image' }
                            onMouseEnter={()=> setIndex(i)}
                            
                           
                            />
                        ))
                    }
                </div> 

                </div>
                
                <div className="product-detail-desc">
                    <h2 className="product-detail-name">{name}</h2>
                    <h4 className="product-details">{details}</h4>
                    <h3 className="product-price">Preț : {price} RON</h3>
                    <h3 className="product-size">Mărime disponibilă:{}</h3>
                    
                    
                    <p>Pentru achiziție, apelați aici:</p>
                    <div className="telefon">
                        <p>0743544345      </p>
                        <Image src={phonew} width={30} height={30}   />
                       
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )

  
}
export const getStaticPaths = async()=>{
    const query=`*[_type=="product"] {
        slug{
            current
        }
    }
    `;

    const products= await client.fetch(query);

    const paths = products.map((product)=>({
        params:{
            slug:product.slug.current
        }
    }))

    return {
        paths,
        fallback:'blocking'
    }
}

export const getStaticProps = async ({params:{slug}}) =>{
    const query=`*[_type=="product" && slug.current == '${slug}'][0]`;
    const productsQuery='*[_type=="product"]'
    const product =await client.fetch(query);
    const products =await client.fetch(productsQuery);
    
   
  
    return {
      props:{products,product}
    }
  }

export default ProductDetails