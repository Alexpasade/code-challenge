import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/bases.css';

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    return (
      <div className="App">
        <Header/>
        <pre>{JSON.stringify(this.state.articles, null, 2)}</pre>
        <Footer/>
      </div>
    );
  }
}

export default App;
