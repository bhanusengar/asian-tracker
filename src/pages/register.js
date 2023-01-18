import Link from 'next/link'
import { InputField } from 'utils'
import Head from 'next/head'
import { useState } from 'react'
import { registerSchema } from 'utils/ValidationSchema'
import { userRegister } from './../http'
import { SelectBox } from 'utils'
import { useFormik } from 'formik'
const Register = () => {

  const roleOption = [
    {
      value: '1',
      label: 'Reader',
    },
    {
      value: '2',
      label: 'Author',
    },
  
  ];
  const [inputValue, setInputValue] = useState(
    {
      username: "", email: "", fname: "", lname: "", password: "", confirm_password: "", role: "", mobile: ""
    }
  );

  const { values, errors, touched, setFieldValue, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: inputValue,
    validationSchema: registerSchema,
    onSubmit: async (values,action) => {
     
      try {
        const res = await userRegister(values);
       
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
      <div className='registerWrapper'>
        <form onSubmit={handleSubmit}>
          <h4 className='fw-bold d-flex justify-content-center'>Sign Up</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
          <div className='row'>
            <div className='col-md-12 mt-2'>
              <InputField type={'email'} name={'email'} value={values.email} label={'Email'} onChange={handleChange} />
              {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
            </div>
            <div className='col-md-12 mt-3'>
              <InputField type={'text'} name={'username'} value={values.username} label={'Username'} onChange={handleChange} />
              {errors.username && touched.username ? (
            <p className="form-error">{errors.username}</p>
          ) : null}
            </div>
            <div className='col-md-6 mt-3'>
              <InputField type={'text'} name={'fname'} value={values.fname} label={'First Name'} onChange={handleChange} />
              {errors.fname && touched.fname ? (
            <p className="form-error">{errors.fname}</p>
          ) : null}
            </div>
            <div className='col-md-6 mt-3'>
              <InputField type={'text'} name={'lname'} value={values.lname} label={'Last Name'} onChange={handleChange} />
              {errors.lname && touched.lname ? (
            <p className="form-error">{errors.lname}</p>
          ) : null}
            </div>
            <div className='col-md-12 mt-3'>
<SelectBox name={'role'} options={roleOption} label={'Sign Up as'} />
{errors.role && touched.role ? (
            <p className="form-error">{errors.role}</p>
          ) : null}
            </div>
            <div className='col-md-12 mt-3'>
              <InputField type={'text'} name={'mobile'} value={values.mobile} label={'Mobile Number (optional)'} onChange={handleChange} />
              {errors.mobile && touched.mobile ? (
            <p className="form-error">{errors.mobile}</p>
          ) : null}
            </div>
            <div className='col-md-6 mt-3'>
              <InputField type={'text'} name={'password'} value={values.password} label={'Password'} onChange={handleChange} />
              {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
            </div>
            <div className='col-md-6 mt-3'>
              <InputField type={'text'} name={'confirm_password'} value={values.confirm_password} label={'Confirm Password'} onChange={handleChange} />
              {errors.confirm_password && touched.confirm_password ? (
            <p className="form-error">{errors.confirm_password}</p>
          ) : null}
            </div>

            <div className="col d-flex ">

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="values." id="form2Example31" />
                <label className="form-check-label" htmlFor="form2Example31"> Show Password </label>
              </div>
            </div>
            <div className='col-md-12 mt-4'>

              <button type="submit" className="mb-4 signupBtn" >Sign in</button>
            </div>
          </div>


        </form>
      </div>

    </>
  )
}

export default Register