import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getBooksData } from './actions';

import BooksContainer from './Components/BooksContainer/BooksContainer';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App(props) {

  const { getBooksData }  = props;
  
  getBooksData();
  

  return (
    <div className="App">
      <Header />
      <BooksContainer />
      <Footer />
    </div>
  );
}

const mapDispatchToProps = () => {
  return {
    getBooksData
  }
}

export default connect(null , mapDispatchToProps())(App);
