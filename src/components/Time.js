import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText } from '@mui/material';

export default function SelectAutoWidth() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 80 }} fullWidth>
        
          <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
          <FormHelperText className='  text-center'>Choose the hour</FormHelperText>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            autoWidth
            label="Age"
          >
            <MenuItem value="">
              <em>----</em>
            </MenuItem>
            <MenuItem value={10}>14:00 -Room 2</MenuItem>
            <MenuItem value={21}>17:00 -Room 4</MenuItem>
            <MenuItem value={22}>19:30 -Room 3</MenuItem>
            <MenuItem value={22}>22:40 -Room 4</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }

//<FormControl fullWidth>
//   <InputLabel id="demo-simple-select-label">Age</InputLabel>
//   <FormHelperText className='  text-center'>Time</FormHelperText>
//   <Select
//     labelId="demo-simple-select-label"
//     id="demo-simple-select"
//     value="17:00"
//     label="Age"
//     value={age}
//   >
//     <MenuItem value={10}>14:00 -Room 2</MenuItem>
//     <MenuItem value={20}>17:00 -Room 4</MenuItem>
//     <MenuItem value={30}>19:30 -Room 3</MenuItem>
//     <MenuItem value={30}>12:40 -Room 4</MenuItem>
//   </Select>
// </FormControl>