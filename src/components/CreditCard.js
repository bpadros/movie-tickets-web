import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { InputAdornment, InputLabel, MenuItem, NativeSelect, Select } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'



const validationSchema = yup.object({
    nameOnCard: yup
    .string('Enter your card name')
    .required('Your name is required'),
    cardNumber:yup
    // .positive("A credit card can't start with a minus")
    .number("A credit card can't include a decimal point")
    // .trim()
    // .min(8)
    // .max(8)
    .required('A credit card number is required'),
    expiryDate:yup
    .date()
    .required(),
    security: yup
    .number().required().positive().integer().max(3).min(3)
})
const CreditCard = () => {

    const formik = useFormik({
        initialValues: {
            nameOnCard:'',
            cardNumber:'',
            expiryDate: '',
            security: '',
          
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    

    return (
        <div className='container bg-light p-5 w-50 border border-primary mt-5'style={{borderRadius:'15px'}}>
    
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
          id="nameOnCard"
          name="nameOnCard"
        //   label="Name on Card"
          placeholder='Name on Card'
          value={formik.values.nameOnCard}
          onChange={formik.handleChange}
          error={formik.touched.nameOnCard && Boolean(formik.errors.nameOnCard)}
          helperText={formik.touched.nameOnCard && formik.errors.nameOnCard}
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
          id="cardNumber"
          name="cardNumber"
        //   label="Card Number"
          placeholder='Card Number'
          type="number"
          value={formik.values.cardNumber}
          onChange={formik.handleChange}
          error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
          helperText={formik.touched.cardNumber && formik.errors.cardNumber}
        />
        <br /><br />
        <div className='d-flex justify-content-around '>
        <p>Exp.date</p>
        <p>Security code</p>
        </div>
       <div className='d-flex justify-content-around '>
       
<div className='d-flex '>
    
  <NativeSelect
    defaultValue={6}
  
    // inputProps={{
    //   name: 'age',
    //   id: 'uncontrolled-native',
    // }}
  >
    <option value={1}>01</option>
    <option value={2}>02</option>
    <option value={3}>03</option>
    <option value={4}>04</option>
    <option value={5}>05</option>
    <option value={6}>06</option>
    <option value={7}>07</option>
    <option value={8}>08</option>
    <option value={9}>09</option>
    <option value={10}>10</option>
    <option value={11}>11</option>
    <option value={12}>12</option>
  </NativeSelect>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
    <option value={2022}>2022</option>
    <option value={2023}>2023</option>
    <option value={2024}>2024</option>
    <option value={2025}>2025</option>
    <option value={2026}>2026</option>
    <option value={2027}>2027</option>
    <option value={2028}>2028</option>
    <option value={2029}>2029</option>
    <option value={2030}>2030</option>
  </NativeSelect>
  </div>
  
  <TextField
          sx={{ input: { width: '100px' } }}
        className='w-25 h1'
          variant='standard'
          placeholder='***'
          id="security"
          name="security"
        //   label="Card Number"
          type="password"
           maxLength={3}
          value={formik.values.security}
          onChange={formik.handleChange}
          error={formik.touched.security && Boolean(formik.errors.security)}
          helperText={formik.touched.security && formik.errors.security}
        />
  </div> 
  <br /><br />     
        <Button color="primary" variant="contained" fullWidth type="submit">
          Next
        </Button>
      </form>
    </div>
  );
};

export default CreditCard;