import React, { useEffect, useState } from 'react'
import { Iproduct } from '../../interface/product'
import useSWR from 'swr'
import { getProductById } from '../../API/productApi'
import { displayImage } from '../../utils/helper'
import RelatedProduct from './related-product'
interface Props{
    id:string
}

const Productdetails = ({id}:Props)=> 
    {

      const {data:product} = useSWR(`getproduct/${id}`, getProductById);

    // const [product,setProducts]= useState<Iproduct>();
    // useEffect(()=>{
    //     const productDetails= async()=>{
    //     try{
    //         const res =await fetch(`https://fakestoreapi.com/products/${id}`);
    //         const product =await res.json();
    //         console.log(product);
    //         setProducts(product);
    //     }catch(error:any){
    //         console.log(error);
    //     }
    // }
    // productDetails()
    // },[id])
  return (
    <div>
    <div className="border p-5 rounded-lg shadow-xl space-y-5 max-w-screen-sm mx-auto">
            <div className="flex items-center justify-center">
              <img src={displayImage(product?.productImage)} alt={product?.productName} 
              className="h-[400px] w-full object-contain" />
            </div>
            <div className="border-t mt-2">
              <p className="font-bold capitalize">{product?.productCategory.categoryName}</p>
              <p className="line-clamp-1">{product?.productName}</p>
              <div><span className="font-bold">Rating:</span> {product?.productRating}, {product?.productRating}</div>
              <p><span className="font-bold">Price:</span> {product?.productPrice}</p>
              <p className="line-clamp-2">{product?.productDescription}</p>
              </div>
     </div>
     <RelatedProduct id = {id} />
    </div>
  )
}

export default Productdetails
