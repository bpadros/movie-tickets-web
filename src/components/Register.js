import React from 'react';
import { Formik } from 'formik';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { InputAdornment } from '@mui/material';


 const validationSchema = yup.object({
  firstname: yup
    .string('Enter your firstName')
    // .min(2, 'firstName should be of minimum 2 characters length')
    //  .max(30, 'firstName should be of max 30 characters length')
    .required('firstName is required'),
  lastname: yup
    .string('Enter your Lastname')
    // .min(2, 'Lastname should be of minimum 2 characters length')
    // .max(30, 'Lastname should be of max 30 characters length')
    .required('Lastname is required'),
    email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    
    .required('Password is required'),
  // username: yup
  //   .string('Enter your username')
    
  //   .required('username is required'),
  //   phoneNumber : yup
   
   
}); 

const Register = () => {
    const formik = useFormik({
        initialValues: {
          firstname:'',
          lastname:'',
          email: '',
          password: '',
          // username:'',
          // phoneNumber:''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return (
        <div className='container bg-light p-5 w-50 border border-primary mt-2'style={{borderRadius:'15px'}} >
    
      <form onSubmit={formik.handleSubmit}>

      <TextField  
         InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              
            </InputAdornment>
          ),
          
        }}
        // sx={{ input: { color: 'red' } }}
        
          variant='standard'
          fullWidth    
          id="firstname"
          name="firstname"
          label="First Name"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText={formik.touched.firstname && formik.errors.firstname}
        />
        <br /><br />
        <TextField
         InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             
            </InputAdornment>
          ),
        }}
          variant='standard'
          fullWidth
          id="lastname"
          name="lastname"
          label="Last Name"
          type="lastname"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
          helperText={formik.touched.lastname && formik.errors.lastname}
        />
       <br /><br />
        <TextField  
         InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
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
              <KeyIcon />
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
        {/* <TextField
         InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <KeyIcon />
            </InputAdornment>
          ),
        }}
          variant='standard'
          fullWidth
          id="password"
          name="password"
          label="Confirm Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        /> */}
        <br />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Create account
        </Button>
        <br /><br />
        <a href="/login" ><p className='text-center'> Already have an account? Log in</p> </a>
        
      </form>
    </div>
    );
};

export default Register;