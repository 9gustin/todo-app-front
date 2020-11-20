import Header from '../containers/header.js';
import Main from '../containers/main.js';
import Footer from '../containers/footer.js';
import { useState } from 'react';
import { stringComparator } from '../utils/stringComparator.js';
import {TodosProvider} from '../context/todoContext';
import Tab from '../models/tab.js';

const Home = () => {
  const [globalProps, setGlobalProps] = useState({
    title: '#TODO',
    tabs: [
      new Tab({ name: 'All', selected: true }),
      new Tab({ name: 'Active', selected: false }),
      new Tab({ name: 'Completed', selected: false })
    ],
    footerText: '9gustin @ DevChallenges.io'
  });

  const handleTabChange = tabName => {
    let tabs = globalProps.tabs.map(tab => {
      if (stringComparator(tab.name, tabName)) tab.selected = true;
      else tab.selected = false;

      return tab;
    });

    setGlobalProps(props => ({ ...props, tabs }));
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
