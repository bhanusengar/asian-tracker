
import Link from 'next/link'
import { InputField } from 'utils'
import LikeBlogCard from './../components/LikeBlogCard'
import Head from 'next/head'
import { loginSchema } from 'utils/ValidationSchema'
import { useFormik } from 'formik'
import { useState } from 'react'
const Login = () => {


  const [inputValue, setInputValue] = useState(
    {
      email: "", password: ""
    }
  );

  const { values, errors, touched, setFieldValue, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: inputValue,
    validationSchema: loginSchema,
    onSubmit: async (values,action) => {
      try {
        const res = await userLogin(values);
      } catch (error) {
        console.log("message", error.message);
      }
    },
  });
  return (
    <>
      <Head>
        <link href={'/css/login.css'} rel={'stylesheet'} />
      </Head>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 my-auto px-5 mt-5'>
            <form onSubmit={handleSubmit} >

              <h4 className='fw-bold'>Sign In</h4>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
              <div className="form-outline mb-4">
               
                <InputField type={'email'} name={'email'} value={values.email} label={'Email'} onChange={handleChange} />
              {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
              </div>
            
              <div className="form-outline mb-4">
              <InputField type={'text'} name={'password'} value={values.password} label={'Password'} onChange={handleChange} />
              {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
              </div>
             
              <div className="row mb-4">
                <div className="col d-flex ">
                  
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="rememberme"  />
                    <label className="form-check-label" htmlFor="rememberme"> Remember me </label>
                  </div>
                </div>

                <div className="col d-flex justify-content-end">
                  
                  <Link href="#!">Forgot password?</Link>
                </div>
              </div>

             
              <div className='d-flex justify-content-between align-items-center'>
                <Link href='#' className='text-decoration-none'>Create Account</Link>
                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
              </div>
              
              <div className="text-center">

                <p>or </p>
               

                <div className='row'>
                  <div className='col-md-6'>
                    <Link href={'#'} className="text-decoration-none">Sign in as Author</Link>
                  </div>
                  <div className='col-md-6'>
                  <Link href={'#'} className="text-decoration-none">Sign in as Admin</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className='col-md-6  pt-5 pb-4 loginRightSideWrapper'>
            <span className="text-white fw-bold d-flex justify-content-center">Articles You may like</span>
            <LikeBlogCard imgSrc={`/images/likeBlogImg.png`} tittle={`Sir Gavin Williamson resigns after bullying claims`} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed interdum felis, vel imperdiet elit`}  />
            <LikeBlogCard imgSrc={`/images/likeBlogImg.png`} tittle={`Sir Gavin Williamson resigns after bullying claims`} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed interdum felis, vel imperdiet elit`}  />
            <LikeBlogCard imgSrc={`/images/likeBlogImg.png`} tittle={`Sir Gavin Williamson resigns after bullying claims`} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed interdum felis, vel imperdiet elit`}  />
          </div>
          </div>
      </div>
    </>
  )
 
} 

export default Login