import React , {useState,useEffect} from 'react';
import axios from 'axios'
import * as yup from 'yup';

const validationSchema = yup.object({
    firstname: yup
    .string('Enter your Lastname'),
    lastname: yup
      .string('Enter your Lastname')   
      .required('Lastname is required'),
      email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required'),
   
    }); 

const Ticket = () => {

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
        <div>
            
        </div>
    );
};

export default Ticket;