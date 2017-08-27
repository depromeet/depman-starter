import Head from 'next/head';
import { cssRaw, style } from 'typestyle';
import Header from './Header';
import { Container } from 'reactstrap'

const Layout = (props) => (
  <div>
    <Header />
    <Container>
      {props.children}
    </Container>
  </div>
)

export default Layout;