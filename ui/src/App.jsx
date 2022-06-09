import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StudentStack, InstructorStack, Body, Header, Footer } from './components';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Header />
      <Body>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/student' element={<StudentStack />} />
          <Route path='/instructor' element={<InstructorStack />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Body>
      <Footer />
    </Router>
  );
};

export default App;