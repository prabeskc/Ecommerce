import { toast } from "sonner"
import { errorMessage } from "../utils/helper"
import App from "../App"
import { AppConfig } from "../config/app.config"
import axios from "axios"

export const getProducts =async(url:string) =>{
    try{
        const {data} =await axios.get(`${AppConfig.API_URL}/${url}`);
        console.log(data)
        return data
    }catch(error){
        toast.error(errorMessage(error));
    }
}



export const getProductById =async(id: string) =>{
    try{
        const {data} =await axios.get(`${AppConfig.API_URL}/getproduct/${id}`);
        console.log(data)
        return data
    }catch(error){
        toast.error(errorMessage(error));
    }
}

export const getRelatedProduct =async(id: string) =>{
    try{
        const {data} =await axios.get(`${AppConfig.API_URL}/relatedproduct/${id}`);
        console.log(data)
        return data
    }catch(error){
        toast.error(errorMessage(error));
    }
}