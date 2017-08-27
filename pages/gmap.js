import React, {Component} from 'react';
import Head from 'next/head';
import GoogleMapReact from 'google-map-react';
import Layout from '../components/Layout';
import {Row} from 'reactstrap';
import {style} from 'typestyle';

const map = style({height: '100%'});

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class gmap extends Component {
  static getInitialProps ({ res }) {
    return {
      center: {lat: 59.95, lng: 30.33},
      zoom: 11
    }
  }

  render() {
    return (
      <Layout>
        <div>
          <div className={map}>
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text={'Kreyser Avrora'}
              />
            </GoogleMapReact>
          </div>
        </div>
      </Layout>
      
    );
  }
}