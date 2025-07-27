import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MaintenancePage from './pages/MaintenancePage';
import Navbar from './components/NavBar';
import './index.css';
function App() {
  return (
    <>
      <Navbar />
      <MaintenancePage />
    </>
  );
}

export default App;


