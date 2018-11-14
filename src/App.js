import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
//import Hero from 'Hero'
//import Content from 'Content'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Main />
      <Footer />
      </div>
    );
  }
}

export default App;
