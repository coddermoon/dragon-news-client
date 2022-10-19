

import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import LeftSide from './pages/shared/LeftSIde/LeftSide';

import RightSide from './pages/shared/RightSide/RightSide';

function App() {
  return (
   <div>
<Header/>
     <Container>
       
   <Row>
    <Col lg="2">
    <LeftSide/>
    </Col>

    <Col lg="7">
    <Outlet/>
    </Col>
    <Col lg="3">
    <RightSide/>
    </Col>
   </Row>
    </Container>
    <Footer/>
   </div>
  );
}

export default App;
