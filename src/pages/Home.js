import Header from '../containers/header';
import Main from '../containers/main';
import Footer from '../containers/footer';
import {useState} from 'react';

const Home = props => {

  const [globalProps, setGlobalProps] = useState(props.initialProps);
  
  const handleTabChange = tabName => {
    let props = {...globalProps, activeTab:tabName};
    setGlobalProps(props);
  }
  

  return (
    <>
      <Header title={globalProps.title} handleTabChange={handleTabChange}/>
      <Main todos={globalProps.todos} activeTab={globalProps.activeTab}/>
      <Footer text={globalProps.footerText}/>
    </>
  );
};

export default Home;
