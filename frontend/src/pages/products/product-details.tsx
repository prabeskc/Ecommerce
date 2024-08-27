import React from "react";
import { useParams } from "react-router-dom";
import Productdetails from "../../component/product/product-details";

const SingleProduct = () => {
  const params = useParams();
  const id = params.id;
  return <div>{id && <Productdetails id={id} />}</div>;
};

export default SingleProduct;
