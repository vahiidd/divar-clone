import React, { useEffect, useState } from 'react';
import styles from './styles/App.module.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DivarProvider from './context/DivarProvider';
import Divar from './components/Divar/Divar';

function App() {
  // const [apiData, setApiData] = useState<api | {}>({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://api.divar.ir/v8/web-search/tehran'
  //       );
  //       const data = await response.json();
  //       setApiData(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // return (
  //   <Router>
  //     <div className={styles.app}>
  //       <Navbar />
  //       <ProductPage />

  //     </div>
  //   </Router>
  // );

  return (
    <Router>
      <DivarProvider>
        <div className={styles.app}>
          <Navbar />
          <Switch>
            <Route path='/' component={Divar} />
          </Switch>
        </div>
      </DivarProvider>
    </Router>
  );
}

export default App;
