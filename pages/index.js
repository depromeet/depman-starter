import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';
import {style} from "typestyle";

const className = style({background: 'red'});

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function getPosts () {
  return [
    { id: 'hello-nextjs', title: '안녕하세요'},
    { id: 'learn-nextjs', title: '디프만 작은 프로젝트'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

const PostLink = ({ post }) => (
  <li>{post.title}</li>
)

export default class Index extends Component {
  render(){
    return (
      <Layout>
        <h1>My Blog</h1>
        <div className={className}>
        {process.env.TEST}
        </div>
        <ul>
          {getPosts().map((post) => (
            <PostLink key={post.id} post={post}/>
          ))}
        </ul>
      </Layout>
    )
  }
}

