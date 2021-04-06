import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Divar from './components/Divar/Divar';
import Navbar from './components/Navbar/Navbar';
import ProductPage from './components/ProductPage/ProductPage';
import DivarProvider, { DivarContext } from './context/DivarProvider';
import ProductProvider from './context/ProductProvider';
import CitiesBox from './components/CitiesBox/CitiesBox';
import styles from './styles/App.module.scss';

function App() {
  return (
    <Router>
      <DivarProvider>
        <div className={styles.app}>
          <Navbar />
          <DivarContext.Consumer>
            {({ city }) => {
              if (!!city) {
                return (
                  <Switch>
                    <Route path='/ProductPage/:token'>
                      <ProductProvider>
                        <ProductPage />
                      </ProductProvider>
                    </Route>
                    <Route path='/:city' component={Divar} />
                  </Switch>
                );
              }
              return <CitiesBox />;
            }}
          </DivarContext.Consumer>
        </div>
      </DivarProvider>
    </Router>
  );
}

export default App;
