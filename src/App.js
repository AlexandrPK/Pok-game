import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import MenuHeader from "./components/MenuHeader"
import Footer from "./components/FooterBlock";
import HomePage from "./routes/Home"
import GamePage from "./routes/Game"
import NotFound from "./routes/NotFound";
import ContactPage from "./routes/Contact";
import AboutPage from "./routes/About";
import cn from "classnames";


import "./index.css";
import "./App.css";
import app from "./style.module.css";

const App = () => {

  const match = useRouteMatch('/')

  return (
    <Switch>
      <Route path="/404" render={() =>( 
        <NotFound />
      )} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(app.wrap, {[app.isHomePage]: match.isExact})}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route render={() => (
                <Redirect to="/404" />
              )} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
  );

}


export default App;
