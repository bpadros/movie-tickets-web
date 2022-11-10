
import Header from './components/Header';
import Home from './components/Home';
import {Route,Routes} from 'react-router-dom';
import Detail from './components/Detail';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Results from './components/Results';
import Login from './components/Login';
import Register from './components/Register';
import CreditCard from './components/CreditCard';
import Checkout from './components/checkout/Checkout';
import CustomizedSelects from './components/Input';
import Footer from './components/Footer';
import {useEffect,useState} from 'react'
import Favourites from './components/Favourites';
// import {Route,Routes} from 'react-router-dom';

function App() {

  const [favorites, setFavorites] = useState([])

  useEffect (()=>{
      const favsInLocal = localStorage.getItem('favs')
    
      if(favsInLocal != null) {
          const favsArray = JSON.parse(favsInLocal) 
          setFavorites(favsArray)
      }
  },[])

  const addOrRemoveFromFavs = (e) => {

  const favMovies = localStorage.getItem('favs')

  let tempMoviesinFavs

    if (favMovies === null) {
      tempMoviesinFavs = []
    } else {
      tempMoviesinFavs = JSON.parse(favMovies)
    }

    const btn = e.currentTarget
    const parent = btn.parentElement
    const imgURL = parent.querySelector('img').getAttribute('src')
    const title = parent.querySelector('h5').innerText
    const overview = parent.querySelector('p').innerText
    const movieData = {
      imgURL,title,overview,
      id: btn.dataset.movieId
    }

    let movieIsInArray = tempMoviesinFavs.find(oneMovie=>{
      return oneMovie.id === movieData.id
    })
    if(!movieIsInArray){
      tempMoviesinFavs.push(movieData)
      localStorage.setItem('favs' ,JSON.stringify(tempMoviesinFavs))
      setFavorites(tempMoviesinFavs)
      console.log('se agrego la pelicula')
    }else {
      let moviesLeft = tempMoviesinFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      })
      localStorage.setItem('favs' ,JSON.stringify(moviesLeft))
      setFavorites(moviesLeft)
      console.log('se elimino la pelicula')
    }
   
  }
  return (
    <div className='container mt-3'>
     <Header favorites={favorites}></Header>    
     {/* <Home></Home>  */}

     <Routes>
    {/* <Route exact path='/' element={<Login/>}/> */}
    {/* <Route exact  path='/listado' element={ (props) => <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} {...props}/>}/> */}
    <Route exact  path='/' element={<Home addOrRemoveFromFavs={addOrRemoveFromFavs}></Home>}/>
    <Route exact  path='/tickets' element={<Checkout/>}/>
    <Route exact  path='/detalle' element={ <Detail/>}/>
    <Route exact  path='/login' element={ <Login/>}/>
    <Route exact  path='/register' element={ <Register/>}/>
    <Route exact  path='/resultados' element={ <Results addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
    {/* <Route exact  path='/payment' element={ <CreditCard/>}/> */}
    <Route exact  path='/input' element={ <CustomizedSelects/>}/>
    <Route exact  path='/favourites' element={ <Favourites favorites={favorites} addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
    </Routes>
    <Footer></Footer>
     
    </div>
  );
}

export default App;
