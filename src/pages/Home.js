import Header from '../containers/header';
import Main from '../containers/main';
import Footer from '../containers/footer';
import { useState } from 'react';

const Home = props => {

  const [globalProps, setGlobalProps] = useState(props.initialProps);

  const handleTabChange = tabName => {
    let props = { ...globalProps, activeTab: tabName };
    setGlobalProps(props);
  }
  const deleteTodo = todo => {
    let todos = globalProps.todos.filter(t => t.id !== todo.id);
    setGlobalProps(props => ({ ...props, todos }));
  }

  const deleteCompleted = todo => {
    let todos = globalProps.todos.filter(t => !t.completed);
    setGlobalProps(props => ({ ...props, todos }));
  }

  const addTodo = todo => {
    let todos = [...globalProps.todos, todo];
    setGlobalProps(props => ({ ...props, todos }));
  }

  const completeTodo = todo => {
    let todos = globalProps.todos.map(t => {
      if (t.id === todo.id) t.complete();
      return t;
    });
    setGlobalProps(props => ({ ...props, todos }));
  }


  return (
    <>
      <Header title={globalProps.title} handleTabChange={handleTabChange} />
      <Main todos={globalProps.todos} activeTab={globalProps.activeTab} todoFunctions={{ addTodo, completeTodo, deleteTodo, deleteCompleted }} />
      <Footer text={globalProps.footerText} />
    </>
  );
};

export default Home;
