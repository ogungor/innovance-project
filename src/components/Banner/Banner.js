import { Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const isLogin = localStorage.getItem("loginInfo");
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("loginInfo");
    navigate("/login");
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="py-3" expand="lg">
        <Container>
          <Navbar.Brand href="/">Innovance Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/formpage">Form</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {!isLogin ? (
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </div>
  );
};
export default Banner;
