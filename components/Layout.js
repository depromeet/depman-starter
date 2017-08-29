import {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCount } from '../redux/actions/index.actions';

import Head from 'next/head';
import { cssRaw, style } from 'typestyle';
import Header from './Header';
import { Container, Row } from 'reactstrap'

class Layout extends Component {
  add = () => {
    this.props.addCount();
  }

  render(){
    const { count } = this.props;
    
    return (
      <div>
        <Header />
        <Container>
          {this.props.children}
          <Row>
            <div className={'col-md-12'}>
              <button onClick={this.add} className={'btn btn-warning'}>Add To Count{count}</button>
            </div>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = ({ count }) => ({ count });

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);