import React from 'react';
import HomePage from './Pages/HomePage/homepage'
import Header from './Components/Header/header.component'
import Footer from './Components/Footer/footer.component'
import './App.css';


import { Switch, Route } from 'react-router-dom';


const App = () => {
  return (
     <div>
      <Header />
        <Switch>
          <Route exact={true} path='/' component={HomePage} />
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
