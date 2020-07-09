import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import DictionaryFallBack from './translate/en';
import translate from './components/Translate'
import { Grid } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: {
        lng: 'en',
        dictionary: DictionaryFallBack.en
      }
    }
  }
  setLanguage = () => {
    const newLanguage = translate(this.state.language.lng);
    this.setState({
      language: newLanguage
    })

  }
  render() {
    return (
      <BrowserRouter>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Header texts={this.state.language.dictionary.navBar} setLanguage={this.setLanguage} />
          </Grid>
          <Grid item xs={12}>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} texts={this.state.language.dictionary.home} />}
            />
            <Route path="/about">
              <About />
            </Route>
            <Route
              path="/contact"
              component={Contact}
            />
            <Route
              path="/footer"
              component={Footer}
            />
          </Grid>
        </Grid>
      </BrowserRouter>
    );
  }
}

export default App;
