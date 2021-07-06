import { Switch, Route } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles.style'
import { AppContainer } from './App.style'

import Nav from './components/Nav'
import Favorites from './components/Favorites'
import About from './components/About'
import ShoesList from './components/ShoesList'
import Filters from './components/Filters'

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
          <Favorites />
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
