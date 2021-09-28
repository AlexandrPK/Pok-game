<<<<<<< Updated upstream
import './App.css';

import Footer from './components/FooterBlock';
import Header from './components/HeaderBlock';
import Layout from './components/LayoutBlock/index.js';
import PokemonCard from "./components/PokemonCard/index.js";
import pokemons from "./pokemon.json";

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
    colorBg = "#00bfff" >
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue.
        </p>
      </Layout>

    <Layout 
    title = 'Cards' 
    colorBg = "#00bfff">
        <div className="flex">
          {pokemons.map((item) => (
            <PokemonCard key={item.id} id={item.id} name={item.name} img={item.img} stats={item.stats} type={item.type} values={item.values}  />
          ))}
        </div>
    </Layout>

    <Layout 
    title = 'This is title_3' 
    descr='This is Description!'
    urlBg = {bg3}>
      <p>
          To win, a majority of the total ten cards played (including the one
          card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card
          adjacent to an opponent's card whereupon the 'ranks' of the sides
          where the two cards touch will be compared. If the rank of the
          opponent's card is higher than the player's card, the player's card
          will be captured and turned into the opponent's color. If the player's
          rank is higher, the opponent's card will be captured and changed into
          the player's color instead.
        </p>
    </Layout>

    <Footer />
    </>
    );
}

export default App;
=======
import React from "react";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";

import GamePage from "./routes/Game";
import HomePage from "./routes/Home";
import AboutPage from "./routes/About";
import ContactsPage from "./routes/Contacts";
import NotFoundPage from "./routes/NotFound";
import MenuHeader from "./components/MenuHeader";
import './App.css';
import sComp from './style.module.css';
import Footer from "./components/Footer";
import cn from 'classnames'

const App = () =>{
  const location = useLocation();
  const isMainPage = location.pathname === '/' ||location.pathname === '/home' ||location.pathname === '/game/board' ;
  
  return(
      <Switch>
        <Route path="/404" component={NotFoundPage} />
        <Route>
          <React.Fragment>
            <MenuHeader bgActive={!isMainPage} />
            <div className={cn(sComp.wrap, {[sComp.isHomePage] : isMainPage})}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" component={HomePage}  />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contacts" component={ContactsPage} />
                <Route render={ () => ( <Redirect to='/404'/>)} />
              </Switch>
            </div>
            <Footer/>
          </React.Fragment>
        </Route>
      </Switch>
  );
}

export default App;
>>>>>>> Stashed changes
