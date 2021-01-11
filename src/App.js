import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Cardgame from './components/Cardgame/Cardgame';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <Hero title="Foot App"/>
        <Cardgame />
      </main>
      <Footer />
    </React.Fragment>
  );

}

export default App;
