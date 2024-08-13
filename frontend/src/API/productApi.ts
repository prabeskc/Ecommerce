import { toast } from "sonner"
import { errorMessage } from "../utils/helper"
import App from "../App"
import { AppConfig } from "../config/app.config"
import axios from "axios"
import { Iproduct } from "../interface/product"

export const getProducts =async(url:string) =>{
    try{
        const {data} =await axios.get(`${AppConfig.API_URL}/${url}`);
        console.log(data)
        return data as Iproduct[]
    }catch(error){
        toast.error(errorMessage(error));
    }
}



export const getProductById =async(url: string) =>{
    try{
        const {data} =await axios.get(`${AppConfig.API_URL}/${url}`);
        console.log(data)
        return data as Iproduct
    }catch(error){
        toast.error(errorMessage(error));
    }
}

export const getRelatedProduct =async(url: string) =>{
    try{
        const {data} =await axios.get(`${AppConfig.API_URL}/${url}`);
        console.log(data)
        return data as Iproduct[]
    }catch(error){
        toast.error(errorMessage(error));
    }
}