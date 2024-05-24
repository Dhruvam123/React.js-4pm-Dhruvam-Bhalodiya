import './Header.css';
import {Link} from "react-router-dom"
import {Container, Row} from "react-bootstrap"
import logo from '../assets/logo.png'
import AuthInput from './AuthInput';
const Header=()=>{
    return(
      <>
        <Container fluid className='m-0 p-0 container'>
          <Row>
            <div className=' col-md-2 ms-5'>
              <img src={logo} alt=""  className='img mt-2' />

            </div>
            <div className='col-md-5'>
            <ul className='unorderlist1'>
              <li className='list'><Link className="active" to="/">Home</Link></li>
  <li className='list'><Link to="/contact">Contact</Link></li>
  
  <li className='list'><Link to="/about">About</Link></li>
  <li className='list'><Link to="/services">Services</Link></li>
</ul>
</div>
<div className='col-md-4 float-end ms-5'>
  <button className='btn btn-danger btn-lg mt-3 ms-5'>Get Started</button>
  <button className='btn btn-lg btn-primary ms-3 mt-3'><span className='bi bi-people-fill'>Sign In</span></button>
  


</div>

          </Row>
          
          
        
        
      </Container>  
      <AuthInput/>
      </>   
    )
}
export default Header