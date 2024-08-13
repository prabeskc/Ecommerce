import useSWR from 'swr'
import React from 'react'
import { getCategory } from '../../../API/categoryApi'

const GetCategory = () => {
  const {data}= useSWR('viewcategory', getCategory)

console.log(data)
  return (
    <div>
      category
    </div>
  )
}

export default GetCategory
