import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppConfig } from "../../config/app.config";
import axios from "axios";
import { Iproduct } from "../../interface/product";
import { useAuth } from "../../hooks/useAuth";
import { IOrder } from "../../interface/order";
import { IUser } from "../../interface/user";

export interface IOrderRequest{
  _id: string
  orderStatus:'shipping' | 'payment' | 'delivered' | 'cancelled'
  products : Iproduct[]
  shippingAddress:{
    user: IUser,
    address: string
  }
}

interface IInitialState {
  orderProducts: IOrder[];
  orderRequest: IOrderRequest | null
}

const initialState: IInitialState = {
  orderProducts: [],
  orderRequest:null
};

export const getOrderProducts = createAsyncThunk("product-orders", async () => {
  const { userId } = useAuth();
  try {
    const { data } = await axios.get(
      `${AppConfig.API_URL}/get-order/${userId}`
    );

    return {
      success: true,
      message: "Successful",
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to get orders",
    };
  }
});

export const addProductToCart = createAsyncThunk(
  "add-product",
  async ({
    productId,
    totalOrder,
  }: {
    productId: string;
    totalOrder: number;
  }) => {
    const { userId } = useAuth();
    try {
      const { data } = await axios.post(`${AppConfig.API_URL}/create-order/`, {
        userId: userId,
        productId,
        totalOrder: totalOrder,
      });

      return {
        success: true,
        message: "Added to cart",
        data,
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to get orders",
      };
    }
  }
);

export const updateProductToCart = createAsyncThunk(
  "update-cart",
  async ({ orderId, totalOrder }: { orderId: string; totalOrder: number }) => {
    const { accessToken } = useAuth();
    try {
      const { data } = await axios.put(
        `${AppConfig.API_URL}/update-order/${orderId}`,
        {
          headers:{
            'Authorization':`Bearer ${accessToken}`
          },
          totalOrder: totalOrder,
        }
      );

      return {
        success: true,
        message: "updated to cart",
        data,
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to update orders",
      };
    }
  }
);

export const getOrderRequest = createAsyncThunk(
  "order-request",
   async () => {
  const { userId } = useAuth();
  try {
    const { data } = await axios.get(`${AppConfig.API_URL}/order-request/${userId}`
    );
    console.log(data)


    return {
      success: true,
      message: "Successful",
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to get orders",
    };
  }
});

export const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setRemoveProduct:(state,action:PayloadAction<IOrder>)=>{
      const updateProduct = action.payload;
      const orders = state.orderProducts;

      const removeOrder = orders.filter((o)=> o._id !== updateProduct._id)
      state.orderProducts= removeOrder
    }
  },
  extraReducers(builder) {
    builder.addCase(getOrderProducts.fulfilled, (state, action) => {
      state.orderProducts = action.payload.data;
    });
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      const product = action.payload.data;
      state.orderProducts.push(product);
    });
    builder.addCase(updateProductToCart.fulfilled, (state, action) => {
      if (action.payload.success) {
        const updatedProduct = action.payload.data;
        const orders = state.orderProducts;
        if (updatedProduct) {
          const index = orders.findIndex((o) => o._id === updatedProduct._id);
          if (index !== -1) {
            orders[index] = updatedProduct;
          }
        }
      }
    })
builder.addCase(getOrderRequest.fulfilled, (state, action) => {
  state.orderRequest = action.payload.data;
});
  },
});

export const { setRemoveProduct} = OrderSlice.actions;
export default OrderSlice.reducer;
