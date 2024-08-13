import useSWR from 'swr'
import React from 'react'
import { getProducts } from '../../../API/productApi'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from  "../../../@/components/ui/table"

const GetProduct = () => {
  const {data}= useSWR('viewproduct', getProducts)

console.log(data)

  return (
    <div>
      <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">SN</TableHead>
          <TableHead>Product name</TableHead>
          <TableHead>Product Image</TableHead>
          <TableHead>Product category</TableHead>
          <TableHead>Product price</TableHead>
          <TableHead>Total products</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      {/* <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
    </div>
  )
}

export default GetProduct
