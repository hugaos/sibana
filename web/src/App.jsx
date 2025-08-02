import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MaintenancePage from './pages/MaintenancePage';
import Navbar from './components/NavBar';
import './index.css';
import HomePage from './pages/HomePage';
import ScrollProgressBar from './components/ScrollProgressBar';
function App() {
  return (
    <>
    <ScrollProgressBar />
    <Navbar />
    <HomePage />
    </>
  );
}

export default App;


