import { AxiosError } from "axios";

//----------------error message---------------

export function errorMessage(error: unknown) {
  const errorMessage =
    error instanceof AxiosError
      ? error.response?.data?.error
      : "somthing wenr wrong";
  return errorMessage;
}
