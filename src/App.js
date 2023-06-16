import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';
import { Footer } from './components/Footer';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currUser, setCurrUser] = useState('');


  return <div className='App'>
    <Navbar isOpen = {isOpen} onOpen={onOpen} onClose = {onClose} currUser={currUser} setCurrUser={setCurrUser}/>
    <AllRoutes isOpen = {isOpen} onOpen={onOpen} onClose = {onClose}  setCurrUser={setCurrUser}/>
    <Footer/>
  </div>
}

export default App;
