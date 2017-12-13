import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Video } from './Video'
import Header from './Header'
import Hero from '../components/Hero'
import SearchPage from './SearchPage'
import VideoPage from './VideoPage'


const Homepage = () => (
  <div>
    <Header />
    <Video />
    <Route exact path='/' component={Hero} />
    <Route path='/search/:term' component={SearchPage} />
    <Route path='/video/:id' component={VideoPage} />
  </div>
);


export default Homepage;
