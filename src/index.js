import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import "./styles/index.css";

const initialProps = {
  title: '#TODO',
  tabs: [
    { name: 'All', selected: true },
    { name: 'Active', selected: false  },
    { name: 'Completed', selected: false  }
  ],
  todos: [],
  footerText: '9gustin @ DevChallenges.io'
};

ReactDOM.render(
  <React.StrictMode>
    <Home initialProps={initialProps} />
  </React.StrictMode>,
  document.getElementById('root')
);
