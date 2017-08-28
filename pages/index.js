import React, {Component} from 'react';

import { bindActionCreators } from 'redux'
import { initStore, addCount, serverRenderClock } from '../redux/actions/index.actions'
import withRedux from 'next-redux-wrapper'

import Link from 'next/link';
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';
import {Row} from 'reactstrap';
import {style} from "typestyle";

const className = style({background: 'red'});

class Index extends Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer));
    store.dispatch(addCount());
    return { isServer }
  }

  componentDidMount () {
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  render(){
    return (
      <Layout>
        <Row>
          <div className={'col-md-4'}>
            <h1>My Blog</h1>
            <div className={className}>
            {process.env.TEST}
            </div>
            <button className={'btn btn-primary'}>dd</button>
          </div>
        </Row>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Index);