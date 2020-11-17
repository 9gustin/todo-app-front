import Header from '../containers/header';
import Main from '../containers/main';
import Footer from '../containers/footer';
import { useState } from 'react';
import { stringComparator } from '../utils/stringComparator';
import Todo from '../models/todo';

const Home = props => {

  const [globalProps, setGlobalProps] = useState(props.initialProps);

  const handleTabChange = tabName => {
    let tabs = globalProps.tabs.map(tab =>{
      if(stringComparator(tab.name, tabName)) tab.selected = true;
      else tab.selected = false;

      return tab;
    });

    setGlobalProps(props => ({ ...props, tabs }));
  }
  
  const getActiveTab = () => globalProps.tabs.find(tab => tab.selected)?.name.toLowerCase();

  const deleteTodo = todo => {
    let todos = globalProps.todos.filter(t => t.id !== todo.id);
    setGlobalProps(props => ({ ...props, todos }));
  }

  const deleteCompleted = todo => {
    let todos = globalProps.todos.filter(t => !t.completed);
    setGlobalProps(props => ({ ...props, todos }));
  }

  const addTodo = jsonTodo => {
    if (jsonTodo.name && jsonTodo.name.trim() !== '') {

      if (!globalProps.todos.some(t => stringComparator(t.name, jsonTodo.name))) {
        let todo = new Todo(jsonTodo);
        todo.initAsNew();

        let todos = [...globalProps.todos, todo];

        setGlobalProps(props => ({ ...props, todos }));
        return true;
      }
    }

    return false;
  }

  const toggleTodoCompleted = todo => {

    let todos = globalProps.todos.map(t => {
      if (t.id === todo.id) t.toggleCompleted();
      return t;
    });

    setGlobalProps(props => ({ ...props, todos }));
  }


  return (
    <>
      <Header title={globalProps.title} handleTabChange={handleTabChange} tabs={globalProps.tabs}/>
      <Main todos={globalProps.todos} activeTab={getActiveTab()} todoFunctions={{ addTodo, toggleTodoCompleted, deleteTodo, deleteCompleted }} />
      <Footer text={globalProps.footerText} />
    </>
  );
};

export default Home;
