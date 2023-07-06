
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { CartWidget } from './CartWidget';
import data from '../data/products.json';

const category = data.map(product => product.category);
const unique = new Set(category);

export const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>AutoMart</Navbar.Brand>
      <Nav className="me-auto">
        {[...unique].map(item => (
          <NavLink
            key={item}
            className="nav-link"
            to={`/category/${item}`}
          >
            {item}
          </NavLink>
        ))}
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
);
