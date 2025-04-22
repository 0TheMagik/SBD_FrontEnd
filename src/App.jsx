import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './assets/logo.svg'
import DMJLogo from './assets/DMJLogo.svg'
import OSLogo from './assets/OSLogo.svg'
import SBDLogo from './assets/SBDLogo.svg'
import Header from './components/Header'
import Intro from './components/Intro'
import PraktikumList from './components/PraktikumList'
import Footer from './components/Footer'

export default function App() {
  const praktikumData = [
    {
      id: 1,
      title: 'Desain & Manajemen Jaringan',
      description: 'Lorem Ipsum.',
      image: DMJLogo
    },
    {
      id: 2,
      title: 'Operating System',
      description: 'Lorem Ipsum.',
      image: OSLogo
    },
    {
      id: 3,
      title: 'Sistem Basis Data',
      description: 'Lorem Ipsum.',
      image: SBDLogo
    }
  ];

  return (
    <div className="App">
      <Header logo={Logo} />
      <div className="container">
        <Intro />
        <PraktikumList praktikumData={praktikumData} />
      </div>
      <Footer />
    </div>
  );
}