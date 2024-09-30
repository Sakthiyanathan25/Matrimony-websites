// index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider
import App from './App.jsx';
import './index.css';
//627126528854-apstn9avrkioijeqgijtj4i6qbm7af7b.apps.googleusercontent.com
createRoot(document.getElementById('root')).render(
 
  <StrictMode>
     <Provider store={store}>
      <GoogleOAuthProvider clientId="">
      <App />
</GoogleOAuthProvider>
</Provider>
  </StrictMode>,
);
