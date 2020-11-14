import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

const initialProps = {
  title: '#TODO',
  todos: [
    { name: 'Learn react', completed: false },
    { name: 'Love mate', completed: true },
    { name: 'other todo', completed: false }
  ],
  activeTab: 'all', //possible values: all, active, completed
  footerText: '9gustin @ DevChallenges.io'
};

ReactDOM.render(
  <React.StrictMode>
    <Home initialProps={initialProps}/>
  </React.StrictMode>,
  document.getElementById('root')
);
