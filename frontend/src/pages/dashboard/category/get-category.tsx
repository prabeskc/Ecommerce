import useSWR from 'swr'
import React from 'react'
import { getCategory } from '../../../API/categoryApi'
import { Table, TableBody, TableCell, TableHead, TableRow } from 'flowbite-react'
import { TableCaption, TableHeader } from '../../../@/components/ui/table'

const CategoryPage = () => {
  const {data:category}= useSWR('/viewcategory', getCategory)

console.log(category)
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">SN</TableHead>
            <TableHead>Category name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {category?.map((category, idx) => (
            <TableRow key={category._id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell>{category.categoryName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default CategoryPage
