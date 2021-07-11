import { Switch, Route } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles.style'
import { AppContainer } from './App.style'
import './App.css'

import Nav from './components/Nav'
import About from './components/About'
import Favourites from './components/Favourites'
import Filters from './components/Filters'

import ShoesList from './components/ShoesList'

const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <Nav />

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/favorites">
          <Favourites />
        </Route>
        <Route path="/">
          <Filters />
          <ShoesList />
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
