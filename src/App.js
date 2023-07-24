import { InaiCheckout } from 'capacitor-inai';

import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    const payload = {
      action: 'getInstalledApps',
      paymentMethodOption: 'upi',
    };
    const config={
      token:"testToken",
      orderId:'test123',
      countryCode:'test'
    }
    InaiCheckout.execute({ ...config, payload }).then((response) => {
      console.log('wwwwwwww', response);
      // success handler
    }).catch((error) => {
      // error handler
    });
  })
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
