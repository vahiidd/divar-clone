import React, { useContext, useEffect, useState } from 'react';
import styles from './styles/App.module.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Divar from './components/Divar/Divar';
import ProductPage from './components/ProductPage/ProductPage';
import { DivarContext } from './context/DivarProvider';
import CitiesBox from './components/CitiesBox/CitiesBox';
import ProductProvider from './context/ProductProvider';
import Cookies from 'js-cookie';

function App() {
  const { city } = useContext(DivarContext);
  const [isSelectCity, setIsSelectCity] = useState(
    Boolean(Cookies.get('city'))
  );
  useEffect(() => {
    setIsSelectCity(Boolean(city));
  }, [city]);
  return (
    <Router>
      <div className={styles.app}>
        <Navbar />
        {isSelectCity ? (
          <Switch>
            <Route path='/ProductPage/:token'>
              <ProductProvider>
                <ProductPage />
              </ProductProvider>
            </Route>
            <Route path='/:city' component={Divar} />
          </Switch>
        ) : (
          <CitiesBox />
        )}
      </div>
    </Router>
  );
}

export default App;
