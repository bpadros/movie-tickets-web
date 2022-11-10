import * as React  from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import  {useState,useEffect} from 'react';
import axios from 'axios'
import * as yup from 'yup';
import Calendario from '../Calendar';
import CustomizedSelects from '../Input';
import Time from '../Time';

export default function AddressForm() {

  let query = new URLSearchParams(window.location.search)
  let ticket = query.get('ticket')

const [movie, setMovie] = useState("")

useEffect(() => {

    const endPoint = `https://api.themoviedb.org/3/movie/${ticket}?api_key=fc3574b333081974e005569591e1ac8c&language=es-ES`
    axios.get(endPoint).then(response=>{
        const movieData = response.data
        console.log(movieData)
        setMovie(movieData)
    })
    .catch(error => {
       console.log(error)
    })
}, [ticket]);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Choose your tickets for {movie.title}
      </Typography>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid> */}
        <Grid item xs={12}>
          <CustomizedSelects></CustomizedSelects>
          <CustomizedSelects></CustomizedSelects>
          <CustomizedSelects></CustomizedSelects>
        </Grid>
        {/* <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <Time></Time>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          /> */}
          <Calendario/>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}