import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'
import { Container } from 'react-bootstrap'
const Navbar=()=>{
    return(
        <div className="navbar shadow">
             <img src={navlogo} alt="" className="nav-logo" />
            <img src={navProfile} alt="" className='nav-profile' />
            </div>

            
           


        
        
    )
}
export default Navbar