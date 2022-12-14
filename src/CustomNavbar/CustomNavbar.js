import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CustomNavbar.css';


function CustomNavbar() {

  return (
    <div>
      <Navbar className="navbar" bg="black" expand="lg" variant="dark" >
        <Navbar.Brand href="#home"><img src="img/logo_navbar.png" alt="logo_navbar" height="88" width="108"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
              <Nav.Link href="#home" className="home">HOME</Nav.Link>
              <Nav.Link href="#about" className="about">ABOUT</Nav.Link>
              <Nav.Link href="#blog" className="blog">BLOG</Nav.Link>
              <Nav.Link href="#teams" className="teams">TEAMS</Nav.Link>
              <Nav.Link href="#partner" className="partner">PARTNER</Nav.Link>
              <Nav.Link href="#contact" className="contact">CONTACT</Nav.Link>
          </Nav>
          <Nav>
            <div className="socials">
              <Nav.Link href="https://www.instagram.com/lxt.official/" target="_blank" className="instagram">
                <img src="img/ig.png" alt="instagram" height="17" width="19"></img>
              </Nav.Link>
              <Nav.Link href="https://twitter.com/lxtesports" target="_blank" className="twitter">
                <img src="img/twitter.png" alt="twitter" height="17" width="17"></img>
              </Nav.Link>
              <Nav.Link href="https://www.twitch.tv/lxtesports" target="_blank" className="twitch">
                <img src="img/twitch.png" alt="twitch" height="17" width="17"></img>
              </Nav.Link>
              <Nav.Link href="https://www.tiktok.com/@lxtesports" target="_blank" className="tiktok">
                <img src="img/tiktok.png" alt="tiktok" height="17" width="17"></img>
              </Nav.Link>
            </div>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
  );
} 

export default CustomNavbar;