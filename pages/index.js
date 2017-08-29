import React, {Component} from 'react';

import { bindActionCreators } from 'redux'
import { initStore, addCount, serverRenderClock } from '../redux/actions/index.actions'
import withRedux from 'next-redux-wrapper'

import Link from 'next/link';
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';
import {Row} from 'reactstrap';
import {style} from "typestyle";

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
          <div className={'col-md-12'}>
            <h1>디프만 스타트킷</h1>
            <div>
              process.env.TEST : {process.env.TEST}
            </div>
            <button className={'btn btn-primary'}>그냥 테스트 버튼 아무것도 하는거 없어요</button>
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