import React, { useCallback } from 'react'
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import Button from '../../component/reusable/button/button'
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { AppConfig } from '../../config/app.config';
import { toast } from 'sonner';
import { errorMessage } from '../../utils/helper';
import  Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';

interface ILoginForm {
  email: string,
  password: string
}

const Signin = () => {
  const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required()
  })
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema)
  })

  const onLogin = useCallback(async (values: ILoginForm) => {
    try{
        const {data} = await axios.post(`${AppConfig.API_URL}/login`,{
            email: values.email,
            password: values.password
        })
       
        Cookie.set('accessToken',data.accessToken);
        Cookie.set('userId', data.user._id);

        navigate('/dashboard')
        toast.success(data.message || "login sucessfully")

    }catch(error){
        toast.error(errorMessage(error))
    }
  }, [])

  return (
    <div className='w-[400px] mx-auto mt-10'>
      <form onSubmit={handleSubmit(onLogin)}>
        <div>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input
            type="email"
            {...register("email")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="John"
          />
          {
            errors.email &&
            <span className='text-red-600 text-sm'>{errors.email.message}</span>
          }
        </div>
        <div>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
            type="text"
            id="password"
            {...register("password")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="John"
          />
          {
            errors.password &&
            <span className='text-red-600 text-sm'>{errors.password.message}</span>
          }
        </div>
        <Button
          buttonType={'submit'}
          buttonColor={{
            primary: true,
          }} >
          Login
        </Button>
      </form>
    </div>
  )
}

export default Signin