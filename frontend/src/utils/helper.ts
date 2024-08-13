import { AxiosError } from "axios";
import { AppConfig } from "../config/app.config";

//----------------error message---------------

export function errorMessage(error: unknown) {
  const errorMessage =
    error instanceof AxiosError
      ? error.response?.data?.error
      : "somthing wenr wrong";
  return errorMessage;
}

export function displayImage(path?:string){

  const imageUrl = `${AppConfig.IMAGE_URL}/${path}`
  return imageUrl;
}