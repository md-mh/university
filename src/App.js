import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Oops from './Components/Oops/Oops';
import Service from './Components/Service/Service';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/"> <Home></Home> </Route>
          <Route exact path="/home"> <Home></Home> </Route>
          <Route exact path="/service"> <Service></Service> </Route>
          <Route exact path="/about"> <About></About> </Route>
          <Route exact path="/contact"> <Contact></Contact> </Route>

          <Route path="*"> <Oops></Oops> </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
