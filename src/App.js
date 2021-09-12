import './App.css';

import Footer from './components/FooterBlock';
import Header from './components/HeaderBlock';
import Layout from './components/LayoutBlock/index.js';

import bg3 from './assets/bg3.jpeg';

const App = () => {
  return (
    <>
    <Header 
    title = 'This is title' 
    descr='This is Description!'/>

    <Layout 
    title = 'This is _1' 
    descr='This is Description!'
    urlBg = {bg3}
    colorBg = "#00bfff" />

    <Layout 
    title = 'This is title_2' 
    descr='This is Description!'
    colorBg = "#00bfff" />
    <Layout 
    title = 'This is title_3' 
    descr='This is Description!'
    urlBg = {bg3}/>

    <Footer />
    </>
    );
}

export default App;
