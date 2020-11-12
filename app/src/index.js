import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

const globalProps = {
  title: '#TODO',
  todos: [
    {name: 'Learn react', completed: false},
    {name: 'Love mate', completed: true},
    {name: 'other todo', completed: false}
  ],
  footerText: '9gustin @ DevChallenges.io'
}

ReactDOM.render(
  <React.StrictMode>
    <Home title={globalProps.title} todos={globalProps.todos} footerText={globalProps.footerText}/>
  </React.StrictMode>,
  document.getElementById('root')
);
