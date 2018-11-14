import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Container from './Container'
import Heroes from './Heroes'

class App extends Component {
    constructor() {
    super()
    this.state = {
      isMain: true,
      location: ''
    }
  }
    toggleIsMain = () => {
    this.setState({isMain: !this.state.isMain})
  }

  changeLocation = (location) => {
    this.setState({location})
  }

  render() {
    return (
      <div className="App">
      <Header changeLocation={this.changeLocation} />
         <Container>
          {this.state.location === 'home'
          ? <Main />
          : this.state.location === 'hero'
          ? <Heroes />
          : <h2>This works now?</h2>}
        </Container>
      <Footer />
      </div>
    );
  }
}

export default App;
