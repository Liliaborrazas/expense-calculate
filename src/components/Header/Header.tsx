import './Header.css'
import logo from '../../images/icon.jpeg'

type Props = {
  title: string;
  onClick: () => void;
}

const Header = ({title, onClick}: Props) => {
  return (
  <nav className='page__header' >
    <div className='navbar-container'>
      <a href='/' className='navbar-link' onClick={onClick}>
          <img src={logo} className='navbar-img' alt='logo'/>
          <p className='navbar-text'>
          {title}
          </p>
      </a>
    </div>
  </nav>)
}

export default Header;