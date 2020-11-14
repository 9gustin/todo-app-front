import Header from '../containers/header';
import Main from '../containers/main';
import Footer from '../containers/footer';

const Home = props => {
  return (
    <>
      <Header title={props.title}/>
      <Main todos={props.todos}/>
      <Footer text={props.footerText}/>
    </>
  );
};

export default Home;
