import Link from 'next/link';
import {style} from 'typestyle';
import NavBar from './NavBar';

const header = style({
  background: '#48b342',
  borderBottom: '1px solid #ccc',
});

const logoStyle = style({
  transition: 'color .2s',
  color: '#fff',
  $nest: {
    '&:hover': {
      color: '#fff'
    }
  }
});



const Header = () => (
  <nav className={['navbar navbar-fixed-top', header].join(" ")}>
    <div className={'container'}>
      <div className={'navbar-header'}>
        <a className={["navbar-brand", logoStyle].join(" ")} href="#">Project name</a>
      </div>
      <div id='navbar' className={'navbar-collapse collapse'}>
        <ul className={'nav navbar-nav navbar-right'}>
          <li>
            <a>오른쪽 네비게이션</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header