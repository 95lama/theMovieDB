import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Popular from './components/Popular.js';
import MovieList from './components/MovieList.js';
import LoadMore from './components/LoadMore.js';

class App extends Component {
  //setup constructor and state
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
    }
  }

  //asynchronous request
  //function ajax call to make fetch request to the api for popular movies
  popularMovies = (e) => {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e6a729c3e9d4206fc5dd7ceefe809a10&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
    `)
      .then(data => data.json()) //return a promise
      .then(data => {
        console.log(data);
        this.setState({ movies: data.results}) 
      })
  }

  //asynchronous request
  //function ajax call to make fetch request to the api using search query
  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e6a729c3e9d4206fc5dd7ceefe809a10&query=${this.state.searchTerm}`)
      .then(data => data.json()) //return a promise
      .then(data => {
        console.log(data);
        this.setState({ movies: data.results, totalResults: data.total_results }) 
      })
  }

  //function to handle the search term change
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  //asynchronous request
  //function ajax call to fetch movie data based on page number
  loadMore = (pageNo) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e6a729c3e9d4206fc5dd7ceefe809a10&query=${this.state.searchTerm}&page=${pageNo}`)
      .then(data => data.json()) //return a promise
      .then(data => {
        console.log(data);
        this.setState({ movies: data.results, currentPage: pageNo})
      })
  }

  render() {
    //get the total number of pages based on total search results obtained
    const pagesCount = Math.floor(this.state.totalResults / 20);
    
    //no syntactic sugar: React.createElement to deal with js syntax instead of jsx
    return React.createElement( 
        "div",
        { className: "App" },
        React.createElement(Nav, { handleSubmit: this.handleSubmit, handleChange: this.handleChange, popularMovies: this.popularMovies }),
        React.createElement(Popular, { movies: this.state.movies }),
        React.createElement(MovieList, { movies: this.state.movies }),

        //logic to only call the loadMore function when there are more than one page
        this.state.totalResults > 20 ? React.createElement(LoadMore, { pages: pagesCount, loadMore: this.loadMore, currentPage: this.state.currentPage }) : ''
     );
  }
}

export default App;
