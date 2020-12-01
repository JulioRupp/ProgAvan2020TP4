import React from 'react';

import './index.css';
import AppRouter from './routers/AppRouter';

const App = () => {
    return (
          <>
            <AppRouter />
          </>
    );
}
 //Si utilizamos Routers, Fragment, o alguna tecnología similar; A App.js no hay que tocarlo mucho
export default App;
