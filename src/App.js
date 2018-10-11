import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';
<<<<<<< HEAD
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/bases.css';
=======
import Header from './components/Header';
import './styles/bases.css'
import Footer from './components/Footer';
>>>>>>> 0ce30b7fc8c483d993cb5aa6dece5b6032e42f6e

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
<<<<<<< HEAD
=======
        <h2>Billin code challenge</h2>
>>>>>>> 0ce30b7fc8c483d993cb5aa6dece5b6032e42f6e
        <pre>{JSON.stringify(this.state.articles, null, 2)}</pre>
        <Footer/>
      </div>
    );
  }
}

export default App;
