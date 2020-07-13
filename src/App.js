import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DictionaryFallBack from './translate/en';
import translate from './components/Translate';
import './styles/App.css';

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
      <React.Fragment>
        <Navbar
          texts={this.state.language.dictionary.navBar}
          setLanguage={this.setLanguage}
        />
        <Home texts={this.state.language.dictionary.home}/>
        <About className={'about-section'} />
        <Contact className={'contact-section'} />
        <Footer />
      </React.Fragment>
    );
  }
};
export default App;
