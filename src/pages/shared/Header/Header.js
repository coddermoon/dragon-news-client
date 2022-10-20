import React, { useContext } from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import LeftSide from '../LeftSIde/LeftSide';



const Header = () => {

const {user,logout} = useContext(AuthContext)
console.log(user)

const handleLogOut = ()=>{
  logout()
  .then(()=> alert('succesfully out'))
  .catch(err=>alert(err.message))
}

    return (
      <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
      <Container>
      <Navbar.Brand ><Link className='logo' to="/"> <span className='bg-primary p-2 rounded text-white font-weight-bold'>Dragon</span> News </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                
                 
              </Nav>
              <Nav>
                  
                      {
                          user?.uid ?
                              <div className='d-flex flex-direction-column align-items-center'>
                                  <span>{user?.displayName}</span>
                                  <Button variant="light" onClick={handleLogOut}>Log out</Button>
                              </div>
                              :
                              <div className='d-flex flex-direction-column align-items-center'>
                                  <Link className='px-2 text-decoration-none' to='/login'>Login </Link>
                                  <Link className='px-2 text-decoration-none' to='/register'>Register</Link>
                              </div>
                      }


                 
                  <Nav.Link eventKey={2} href="#memes">
                      {user?.photoURL ?
                          <Image
                              style={{ height: '30px' }}
                              roundedCircle
                              src={user?.photoURL}>
                          </Image>
                          : <FaUser></FaUser>
                      }
                  </Nav.Link>
              </Nav>
              <div className='d-lg-none'>
                  <LeftSide></LeftSide>
              </div>
          </Navbar.Collapse>
      </Container>
      </Navbar>
    );
};

export default Header;