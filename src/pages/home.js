import Header from '../containers/header.js';
import Main from '../containers/main.js';
import Footer from '../containers/footer.js';
import { useReducer } from 'react';
import { stringComparator } from '../utils/stringComparator.js';
import {TodosProvider} from '../context/todoContext';
import Tab from '../models/tab.js';

const initialState = {
  title: '#TODO',
  tabs: [
    new Tab({ name: 'All', selected: true }),
    new Tab({ name: 'Active', selected: false }),
    new Tab({ name: 'Completed', selected: false })
  ],
  footerText: '9gustin @ DevChallenges.io'
};

const homeStateReducer = (state, action) => {
  switch(action.type){
    case 'TAB_CHANGE':
      return {
        ...state,
        tabs: state.tabs.map(tab => {
          if (stringComparator(tab.name, action.payload)) tab.selected = true;
          else tab.selected = false;
    
          return tab;
        })
      }
    default: return state;
  }
}

const Home = () => {
  const [globalProps, dispatchGlobalProps] = useReducer(homeStateReducer, initialState);

  const handleTabChange = tabName => {
    dispatchGlobalProps({type:'TAB_CHANGE', payload: tabName});
  }

  const getActiveTab = () => globalProps.tabs.find(tab => tab.selected);

  return (
    <>
      <Header title={globalProps.title} handleTabChange={handleTabChange} tabs={globalProps.tabs} />
      <TodosProvider>
        <Main activeTab={getActiveTab()} />
      </TodosProvider>
      <Footer text={globalProps.footerText} />
    </>
  );
};

export default Home;
