import React from 'react';
import Login from './components/Login';
import { unstable_createRoot as createRoot } from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Mon Application</h1>
      <Login />
    </div>
  );
};

export default App;
