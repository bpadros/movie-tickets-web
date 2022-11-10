import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import { Button, FormHelperText } from '@mui/material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    // transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
     
    },
  },
}));

export default function CustomizedSelects() {
  const [age, setAge] = React.useState('');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
 
  return (
    <>
     
     <FormControl sx={{ m: 1 }} variant="standard">
    <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
    <FormHelperText className='  text-center'>Ticket type</FormHelperText>
        <BootstrapInput id="demo-customized-textbox" value="Adultos $1000" />
        </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
    <InputLabel id="demo-customized-select-label"></InputLabel>
    <FormHelperText className='  text-center'>Quantity</FormHelperText>
        <Select
          labelId="demo-customized-select-label"
           label='hola'
          id="demo-customized-select"        
          value={age}    
          onChange={handleChange}
          input={<BootstrapInput />}
          placeholder='Num'
        >
          <MenuItem value="">
            <em>0</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
         
        </Select>
        
        </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
     
    <InputLabel htmlFor="demo-customized-select-native" variant="standard"></InputLabel>
    <FormHelperText className='text-center'>Price</FormHelperText>
        <Select
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          defaultValue='Price'
          input={<BootstrapInput />}
          inputProps={{ readOnly: true }}
        >
          <option aria-label="None" value="0" />
          <option value={1}>$1000</option>
          <option value={2}>$2000</option>
          <option value={3}>$3000</option>
          <option value={4}>$4000</option>
          <option value={5}>$5000</option>
          <option value={6}>$6000</option>
          <option value={7}>$7000</option>
          <option value={8}>$8000</option>
          <option value={9}>$9000</option>
          <option value={10}>$10000</option>
        </Select>
   
    </FormControl>
 
    </>
  );
}