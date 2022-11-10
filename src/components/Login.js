import React from 'react';
 import { Formik } from 'formik';
 import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { Checkbox, FormControlLabel, InputAdornment } from '@mui/material';
import LockRoundedIcon from '@mui/icons-material/LockRounded';


 const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
}); 



const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
    
    <div className='container bg-light p-5 w-50 border border-primary mt-2'style={{borderRadius:'15px'}}>
    <div className='text-center'>
    <LockRoundedIcon color="primary"/>
    <h4>Log in</h4>
    </div>  
      <form onSubmit={formik.handleSubmit}>
      
        <TextField  
         InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon color="primary"/>
            </InputAdornment>
          ),
          
        }}
        // sx={{ input: { color: 'red' } }}
          variant='standard'
          fullWidth    
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <br /><br />
        <TextField
         InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <KeyIcon color="primary"/>
            </InputAdornment>
          ),
        }}
          variant='standard'
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <br /><br />
        <FormControlLabel control={<Checkbox  />} label="Remember me" />
        <br /><br />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Log in
        </Button>
         <br /><br />
        <div className='d-flex justify-content-between'>
        <a href="/">Forgot password?</a>
        <a href="/register">Don't have an account? Sign Up</a>
        </div>
        <br /><br />
        <p className='text-center mb-0'>Copyright © Movie tickets 2022.</p>
      </form>
    </div>
    </>
  );
};

export default Login;