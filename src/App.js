import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import DictionaryFallBack from './translate/en';
import translate from './components/Translate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: {
        lng: 'en',
        dictionary: DictionaryFallBack.en
      },
      modal: {
        open: false
      }
    }
  }
  setLanguage = () => {
    const newLanguage = translate(this.state.language.lng);
    this.setState({
      language: newLanguage
    })
  }
  showModal = (show) => {
    this.setState({
      modal: {
        open: show
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar texts={this.state.language.dictionary.navBar} setLanguage={this.setLanguage}/>
        <Home texts={this.state.language.dictionary.home}/>
        <About texts={this.state.language.dictionary.about}/>
        <Contact texts={this.state.language.dictionary.contact} showModal={this.showModal}/>
        <ContactModal texts={this.state.language.dictionary.contact.form} open={this.state.modal.open} showModal={this.showModal} />
        <Footer />
      </React.Fragment>
    );
  }
};
export default App;
