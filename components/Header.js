import Link from 'next/link';
import {style} from 'typestyle';
import NavBar from './NavBar';

const Header = () => (
  <nav className={'navbar navbar-inverse navbar-fixed-top'}>
    <div className={'container'}>
      <div className={'navbar-header'}>
        <a className="navbar-brand" href="#">Project name</a>
      </div>
      <div id='navbar' className={'navbar-collapse collapse'}>
      </div>
    </div>
  </nav>
)

export default Header