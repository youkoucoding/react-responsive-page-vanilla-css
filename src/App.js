import * as React from 'react';
import {
  Blog,
  Footer,
  Header,
  Possibility,
  Features,
  WhatCPT3,
} from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatCPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
