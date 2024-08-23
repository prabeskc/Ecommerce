import useSWR, { mutate } from "swr";
import React, { useCallback, useState } from "react";
import { getProducts } from "../../../API/productApi";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../@/components/ui/table";
import Products from "../../../component/product/products";
import { displayImage, errorMessage } from "../../../utils/helper";
import { Link } from "react-router-dom";
import Button from "../../../component/reusable/button/button";
import DeleteModal from "./delete-modal";
import axios from "axios";
import { AppConfig } from "../../../config/app.config";
import { toast } from "sonner";
import { Iproduct } from "../../../interface/product";

type IModal = "update" | "delete";

const GetProduct = () => {
  const { data: products } = useSWR("viewproduct", getProducts);
  const [modal, setModal] = useState<IModal | null>(null);
  const [product, setProduct] = useState<Iproduct | null>(null);

  const deleteProduct = useCallback(async (id: string) => {
    try {
      const { data } = await axios.delete(
        `${AppConfig.API_URL}/deleteproduct/${id}`
      )

      const updateProduct = products?.filter((p) => p._id !== product?._id);
      mutate('viewproduct',updateProduct)

      toast.message(data.message);
      setModal(null);
    } catch (error) {
      toast.error(errorMessage(error));
    }
  }, []);

  return (
    <div>
      <div className="my-2 flex justify-end">
        <Link to={"/dashboard/add-product"}>
          <Button
            buttonType={"button"}
            buttonColor={{
              primary: true,
            }}
          >
            Add Product
          </Button>
        </Link>
      </div>
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
            <TableHead>Action</TableHead>

            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product, idx) => (
            <TableRow key={product._id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="font-medium">
                {product.productName}
              </TableCell>
              <TableCell className="font-medium">
                <img
                  src={displayImage(product.productImage)}
                  alt={product.productName}
                  className="h-20 w-20"
                />
              </TableCell>
              <TableCell>{product.productCategory.categoryName}</TableCell>
              <TableCell className="">{product.productPrice}</TableCell>
              <TableCell className="">{product.totalProduct}</TableCell>
              <TableCell className="">
                <div className="flex items-center gap-2">
                  <Link to={`/dashboard/update-product/${product._id}`}>
                    <Button
                      buttonType={"button"}
                      buttonColor={{
                        primary: true,
                      }}
                    >
                      Update
                    </Button>
                  </Link>
                  <Button
                    buttonType={"button"}
                    buttonColor={{
                      secondary: true,
                    }}
                    onClick={()=>{setModal("delete"); setProduct(product)}}
                  >
                    Delete
                  </Button>
                  {/* <DeleteModal onDelete={() => deleteProduct(product._id)} /> */}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
      </Table>
      {
        product &&
        <DeleteModal
        open={modal ==="delete"}
        onClose={()=> setModal(null)}
        onDelete={()=>deleteProduct(product._id)}
        />
      }
    </div>
  );
};

export default GetProduct;
