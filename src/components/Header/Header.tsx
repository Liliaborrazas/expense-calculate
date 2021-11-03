import './Header.css'

type Props = {
  title: string;
  onClickFn: () => void;
}

const Header = ({title, onClickFn}: Props) => {
  return <nav className='header' onClick={onClickFn}>
    {title}</nav>
}

export default Header;