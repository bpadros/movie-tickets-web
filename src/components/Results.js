
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'





function Results (props) {

    let query = new URLSearchParams(window.location.search)
    let keyword = query.get('keyword')

    const [moviesResults, setMoviesResults] = useState([])

    useEffect(() => {
      const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=fc3574b333081974e005569591e1ac8c&language=en-EN&query=${keyword}`
      axios.get(endPoint)
      .then(response=>{
          const moviesArray = response.data.results
          if (moviesArray.length === 0){
            alert(<h4>Tu busqueda no arrojo resultados</h4>)
          }
          setMoviesResults(moviesArray)   
      })
      .catch(error => console.log(error))
    },[])
    

    return (
        <>
        <h2 className='text-white'>Results from : <em> {keyword}</em></h2>
        {moviesResults.length === 0 && <h3>No results</h3>}
        <div className="row">
    {/*Estrcutura base */}
    {
        moviesResults.map((oneMovie,idx)=>{
            return <div className="col-2" key={idx}>
           <div className="card my-4">
          <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
          <div className="card-body bg-black align-items-center">
            <h5 className="card-title text-white mb-2">{oneMovie.title}</h5>
            {/* <button 
          className="favourite-btn"
          onClick={props.addOrRemoveFromFavs}
          data-movie-id={oneMovie.id}
          >🖤</button>
             */}
           </div>
        </div>
      </div>
        })
    }
      
    </div>
        </>
    )
}

export default Results