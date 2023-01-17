import Link from 'next/link'
import InputField from 'utils/InputField'
import Head from 'next/head'
const Register = () => {
  return (

    <>
      <Head>
        <link href={'/css/login.css'} rel={'stylesheet'} />
      </Head>
      <div className='registerWrapper'>


        <form>
          <h4 className='fw-bold d-flex justify-content-center'>Sign Up</h4>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>

          <div className='row'>
            <div className='col-md-12 mt-2'>
              <InputField type={'text'} label={'Email'} />
            </div>
            <div className='col-md-12 mt-3'>
              <InputField type={'text'} label={'Username'} />
            </div>
            <div className='col-md-6 mt-3'>
              <InputField type={'text'} label={'First Name'} />
            </div>
            <div className='col-md-6 mt-3'>
              <InputField type={'text'} label={'Last Name'} />
            </div>
            <div className='col-md-12 mt-3'>
              <InputField type={'text'} label={'Sign Up as'} />
            </div>
            <div className='col-md-12 mt-3'>
              <InputField type={'text'} label={'Mobile Number (optional)'} />
            </div>
            <div className='col-md-6 mt-3'>
              <InputField type={'text'} label={'password'} />
            </div>
            <div className='col-md-6 mt-3'>
              <InputField type={'text'} label={'Confirm Password'} />
            </div>

            <div className="col d-flex ">
                  
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form2Example31"  />
                    <label className="form-check-label" htmlFor="form2Example31"> Show Password </label>
                  </div>
                </div>
                <div className='col-md-12 mt-4'>

                <button type="button" className="mb-4 signupBtn">Sign in</button>
                </div>
          </div>
          
         
        </form>
      </div>

    </>
  )
}

export default Register