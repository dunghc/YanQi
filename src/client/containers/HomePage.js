import React from 'react';
import Logo from '../components/Logo.js';
import { Video } from './Video.js';
import Hero from '../components/Hero.js';
import TitleList from '../components/TitleList.js';
import UserProfile from './UserProfile.js';


class Homepage extends React.Component {
  constructor() {
    super();
    this.apiKey = '87dfa1c669eea853da609d4968d294be';
    this.state = {searchTerm: '', searchUrl: ''}

    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // Process the search
  handleKeyUp(e) {
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      let searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
      this.setState({searchUrl: searchUrl});
    }
  }

  // Set the state when search term is changed
  handleChange(e) {
      this.setState({searchTerm : e.target.value});
  }

  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Search for a title..." value={this.state.searchTerm}/>
          </div>
          <UserProfile />
        </header>
        <UserProfile />
        <Hero />
        <Video />
        <TitleList title="Search Results" url={this.state.searchUrl} />
        {/* <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1' />
        <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' /> */}
      </div>
    );
  }
}


// Navigation
const Navigation = () => (
  <div id="navigation" className="Navigation">
    <nav>
      <ul>
        <li>Browse</li>
        <li>My list</li>
      </ul>
    </nav>
  </div>
)


export default Homepage;
