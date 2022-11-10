import React , {useEffect,useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'
import '../css/home.css'



export default function Home(props) {

    const [moviesList, setMoviesList] = useState([])

useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=fc3574b333081974e005569591e1ac8c&language=en-EN&page=1'
    axios.get(endPoint)
    .then(response=>{
        const apiData = response.data
        setMoviesList(apiData.results)     
    })
    .catch(error => {
      console.log(error)
    })
}, [setMoviesList]);

console.log(moviesList)


  return (
    <>
    <div  className="contenedor">
      
    
     <h2 className='text-white'>Now in theaters</h2>
     <Container>
      <Row>
        {
            moviesList.map((oneMovie,idx)=>{
                return  <Col sm={3} key={idx}> 
                
                <div className="card my-4">
          <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
         
           <button 
          className="favourite-btn"
          onClick={props.addOrRemoveFromFavs}
          data-movie-id={oneMovie.id}
          >🖤</button>
          <div className="card-body bg-black">
            <h5 className="card-title text-white">{oneMovie.title}</h5>
            <p className="card-text text-white">
             {oneMovie.overview.substring(0,100)}...
            </p>
            <a href={`/detalle?movieID=${oneMovie.id}`} className='detail-btn'>View details.</a>
            {/* <Link to='/' className="btn btn-primary">View detail</Link> */}
           </div>
        </div>
                
                
                
                
                
                
                </Col>
            })
       

        }
       
      </Row>
    </Container>
    </div>
    </>
  )
}
