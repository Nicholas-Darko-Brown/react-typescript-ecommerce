import { BsBook, BsCart, BsFacebook, BsInstagram, BsPen, BsTelephone } from 'react-icons/bs'
import { GiInfo } from 'react-icons/gi'
import "../../styles/Footer.css"
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className='footer'>
      <div className="footer1">
        <ul>
          <li><a href='/store'> <BsCart /> Store </a></li>
          <li><a href='#'> <GiInfo /> About</a></li>
          <li><a href='/contact'> <BsTelephone /> Contact us</a></li>
        </ul>
      </div>
      <div className="footer2">
        <ul>
          <li><a href=''> <BsBook />Our Terms</a></li>
          <li><a href=''> <BsPen /> Policy</a></li>
        </ul>
      </div>
      <div className="footer3">
        <ul>
          <li><a href=''> <BsFacebook /> Facebook</a></li>
          <li><a href=''> <BsInstagram /> Instagram</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer