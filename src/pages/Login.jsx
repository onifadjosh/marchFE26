import axios from 'axios';
import { useFormik } from 'formik';
import { jwtDecode } from 'jwt-decode';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import * as yup from "yup"

const Login = () => {
  const cookies = new Cookies()
  let navigate= useNavigate()
   let formik = useFormik({
          initialValues:{
            //   firstName:"",
            //   lastName:"",
              email:"",
              password:""
          },
  
          onSubmit:async(values)=>{
              console.log(values);
              try {
                const response = await axios.post("http://localhost:4008/api/v1/login", values)
                console.log(response.data);
                console.log(response.status);
                

               if(response.status==200){
                 const token = response.data.data.token
                 const decoded=await jwtDecode(token)
                 console.log(decoded);
                 console.log("hello");
                
                cookies.set("token", token, {
                  expires: new Date(decoded.exp*1000)
                })
                navigate("/")
                
               }
                
              } catch (error) {
                console.log(error);
                alert("error logging user")
                
                
              }

              
          },
  
          validationSchema: yup.object({
            //   firstName:yup.string().required("first name is required"),
            //   lastName:yup.string().required("last name is required"),
              email:yup.string().required("email is required").email("invalid email format"),
              password:yup.string().required("password is required")
          })
  
      })
  
      // console.log(formik.values);
      // console.log(formik.errors);
      console.log(formik.touched);
      
      
      
    return (
      <div>
          {/* <input type="text" placeholder='first name' name='firstName'  onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
         {(formik.touched.firstName&&formik.errors.firstName)&& <small className='text-danger'>{formik.errors.firstName}</small>}<br />
          <input type="text" placeholder='last name' name='lastName'  onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
         {(formik.touched.lastName&&formik.errors.lastName) &&  <small className='text-danger'>{formik.errors.lastName}</small>}<br /> */}
          <input type="email" placeholder='email'  name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
          {(formik.touched.email&&formik.errors.email)&& <small className='text-danger'>{formik.errors.email}</small>}<br />
          <input type="text" placeholder='password' name='password'  onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
          {(formik.touched.password&&formik.errors.password)&& <small className='text-danger'>{formik.errors.password}</small>}<br />
  
          <button type='submit' onClick={formik.handleSubmit}>{formik.isSubmitting?"submitting...": "submit"}</button>
      </div>
    )
  }

export default Login