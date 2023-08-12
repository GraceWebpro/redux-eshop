import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useSelector } from 'react-redux'

function NavComponent() {

  const { cartItems } = useSelector((state) => state.cart)

  const getTotalQuantity = () => {
    let total = 0
    cartItems.forEach(item => {
      total += item.number
    })
    return total
  }

  return (
    <Navbar expand="lg" className="bg-primary navbar-custom">
      <Container>
        <Navbar.Brand className='navbar-brand' style={{color:"white", fontSize: "30px", fontWeight: "700" }}>
          <StorefrontIcon style={{ fontSize: '40px'}} /> eSHop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: "white"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            
          </Nav>

          <Nav className="d-flex">
            <Nav.Link ><Link to='/' style={{color:"white", fontSize: "22px", textDecoration: 'none'}}>Home</Link></Nav.Link>
            <Nav.Link ><Link to='/products' style={{color:"white", fontSize: "22px", textDecoration: 'none'}}>Products</Link></Nav.Link>
            <Nav.Link href="#contact" style={{color:"white", fontSize: "22px"}} >Contact</Nav.Link>
            <Nav.Link ><Link to='/cart' style={{color:"white", fontSize: "22px", textDecoration: 'none'}}>
              <ShoppingCartIcon style={{ fontSize: '30px' }} />
              <div className='amount-container'>
                <p className='total-amount'>{getTotalQuantity() || 0}</p>

              </div>
              </Link></Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;

