
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} id="navbar" className="navbar mb-3 w-100 fixed-top  ">
          <Container fluid className='justify-content-around '>
       
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="#">
                The Wordrobe
                <p className='owner '>by Shreya Nagpal</p>
            </Navbar.Brand>
            <Nav.Link href="#action1" className='nav-link'>
      <FontAwesomeIcon icon={faCartPlus} className="btn_hov text-black" /></Nav.Link>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
              scrollable="false"
              className="text-justify h-75"
            >
              <Offcanvas.Header closeButton>
             < Nav.Link href="#action1" className='nav-link'>
      <FontAwesomeIcon icon={faCartPlus} className="btn_hov text-black" /></Nav.Link>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
          The Wadrobe !
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" flex-d   text-justify flex-grow-1 pe-3">
                  <Nav.Link href="#action1">HOME</Nav.Link>
                  <Nav.Link href="#action2">TOPWEAR</Nav.Link>
                  <Nav.Link href="#action2">SKIRTS & DRESSES</Nav.Link>
                  <Nav.Link href="#action2">PLUS SIZE</Nav.Link>
                  <Nav.Link href="#action2">GET IN TOUCH</Nav.Link>
                  <Nav.Link href="#action2">Log in</Nav.Link>
                </Nav>
            
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigation;