import useSWR from 'swr'
import React from 'react'
import { getProducts } from '../../../API/productApi'

const GetProduct = () => {
  const {data}= useSWR('viewproduct', getProducts)

console.log(data)

  return (
    <div>
      products
    </div>
  )
}

export default GetProduct
