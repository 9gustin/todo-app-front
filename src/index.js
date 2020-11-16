import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './models/todo';
import Home from './pages/home';

const initialProps = {
  title: '#TODO',
  todos: [
    // new Todo({ id: 1, name: 'Learn react', completed: true }),
    // new Todo({ id: 2, name: 'Love mate', completed: true }),
    // new Todo({ id: 3, name: 'other todo', completed: false })
  ],
  activeTab: 'all', //possible values: all, active, completed
  footerText: '9gustin @ DevChallenges.io'
};

ReactDOM.render(
  <React.StrictMode>
    <Home initialProps={initialProps} />
  </React.StrictMode>,
  document.getElementById('root')
);
