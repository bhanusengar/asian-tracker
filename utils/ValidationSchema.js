import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  // mobile: Yup.string().min(10, 'Invalid phonenumber').max(10, 'Invalid phone number').required("Please enter your phone number").matches(/^\+?[6-9][0-9]{7,14}$/, "Invalid phone number"),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  // role: Yup.string().required(),
  name: Yup.string().required(),
  // lname: Yup.string().required()
});

export const loginSchema = Yup.object().shape({
  username: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  password: Yup.string().required('Password is required')
});