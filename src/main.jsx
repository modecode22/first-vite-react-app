import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './redux/store/store';
import { Provider } from'react-redux';
ReactDOM.createRoot(document.getElementById("root")).render(


//3- wrap all app with redux provider
<Provider store={store}>
      <App />
  </Provider>
);
