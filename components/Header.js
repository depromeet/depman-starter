import Link from 'next/link';
import {style} from 'typestyle';
import NavBar from './NavBar';

const header = style({
  position: 'relative',
  height: '80px',
  borderBottom: '1px solid #ccc',
});

const container = style({
  width: '1000px',
  height: '100%',
  margin: '0 auto',
  lineHeight: '80px',
});
const rightContent= style({
  display:'inline-block',
});
const logo = style({
  position: 'relative',
  display: 'inline',
  width: '40px',
  height:'40px',
  padding: '20px 0px',
});

const logoTitle = style({
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '185px',
  right: '0',
  fontSize: '18px',
  height: '80px',
  color: '#333'
})

const Header = () => (
  <div className={header}>
    <div className={container}>
      <div className={rightContent}>
        <span><img src="/static/assets/imgs/logo.png" className={logo} /></span>
        <span><h1 className={logoTitle}>DEPROMEET</h1></span>
      </div>
      <NavBar />
    </div>
  </div>
)

export default Header