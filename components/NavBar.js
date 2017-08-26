import { style } from 'typestyle';
import Router from 'next/router'

const container = style({
  position: 'relative',
  display: 'inline-block',
  float: 'right',
});

const link = style({
  marginRight: '10px',
  textDecoration: 'none',
  color: '#666',

  $nest: {
    '&:hover': {
      color: '#333'
    }
  }
});

function onClickHandler (href) {
  return (e) => {
    e.preventDefault()
    Router.push(href)
  }
}

const Link = ({ children, href, onClick}) => (
  <a href='#' className={link} onClick={onClick || onClickHandler(href)}>
    {children}
  </a>
)

const NavBar = (props) => (
  <div className={container}>
    <Link href="/">홈</Link>
    <Link href="/login">로그인</Link>
  </div>
)

export default NavBar;