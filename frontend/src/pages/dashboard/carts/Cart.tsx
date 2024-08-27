import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../@/components/ui/table";
import { getOrderProducts } from "../../../redux/slice/order-slice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { orderProducts } = useAppSelector((store) => store.order);

  useEffect(() => {
    dispatch(getOrderProducts());
  }, [dispatch]);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.N</TableHead>
            <TableHead>Product name</TableHead>
            <TableHead>Product price</TableHead>
            <TableHead>Total amount</TableHead>
            <TableHead>Total order</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderProducts.map((order) => (
            <TableRow key={order?._id}>
              <TableCell className="font-medium">
                {order?.product?.productName}
              </TableCell>
              <TableCell>{order?.product?.productPrice}</TableCell>
              <TableCell>
                {Number(order?.product?.productPrice) * Number(order?.totalOrder)}
              </TableCell>
              <TableCell className="">{order?.totalOrder}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Cart;
