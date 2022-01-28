import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './utils/style/GlobalStyle';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Project from './pages/Project';
import Portfolio from './pages/Portfolio';
import Admin from './pages/Admin';
import Error from './components/Error';
import { ThemeProvider } from './utils/context';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);