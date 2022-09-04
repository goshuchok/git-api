import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Logo from './components/Logo';
import UserInfo from './Routes/UserInfo';
import Users from './Routes/Users';

const App: React.FC = () => {
  return (
    <div className="App">
      <Logo />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:name" element={<UserInfo />} />
      </Routes>
    </div>
  );
};

export default App;
