import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import '../css/header.css'

function Header(props) {

  let navigate  = useNavigate()


  const submitHandler = e => {
      e.preventDefault()
      const keyword = e.currentTarget.keyword.value.trim()

      if(keyword.length === 0){
          alert("Write a word...")
      } else if(keyword.length < 4){
          alert("Write more")
      } else {
          e.currentTarget.keyword.value = ''
          navigate(`/resultados?keyword=${keyword}`)
      }

  }

  return (
    <Navbar bg="black" expand="lg">
      <Container className="p-3">
        <Navbar.Brand href="\" className="text-warning" style={{fontWeight:'800',textDecoration:'underline'}}>Movie-tickets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-warning' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-white" style={{fontWeight:'600'}}>Home</Nav.Link>
            <Nav.Link href="/favourites" className="text-white" style={{fontWeight:'600'}}>Watchlist</Nav.Link>
           <Navbar.Text className="text-white mx-5">
           {props.favorites.length > 0 && <>Movies in watchlist : {props.favorites.length}</>}
          </Navbar.Text> 
          
         
          </Nav>
          <Form className="d-flex mx-5"  onSubmit={submitHandler}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name='keyword'
            />
            <Button variant="outline-primary" type='submit'>Search</Button>
          </Form>
          <Nav.Link href="/login" className="text-white m-2 border border-primary p-2 font-weight-bold" style={{borderRadius: '10px',backgroundColor:'blue',fontWeight:'600'}}>Login</Nav.Link>
            <Nav.Link href="/register" className="text-primary border border-primary p-1 font-weight-bold" style={{borderRadius: '10px'}} >Register</Nav.Link>
          {/* <Navbar.Text className="text-white">
            Signed in as: <a href="#login" className="text-success">Benjamin Padros</a>
          </Navbar.Text> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;