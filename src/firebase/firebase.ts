import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
require('dotenv').config();

const firebaseConfig = {
  apiKey: 'AIzaSyDGqSshaE-DiKyOfccxLZ47CdyKM_fjN_Q',
  authDomain: 'drom-code.firebaseapp.com',
  projectId: 'drom-code',
  storageBucket: 'drom-code.appspot.com',
  messagingSenderId: '118823425993',
  appId: '1:118823425993:web:2d51868d820ecf88727a18',
  measurementId: 'G-TSMPFG0YHX',
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export {
  analytics
}