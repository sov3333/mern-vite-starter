import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo, logo_full } from './assets';
import { Home, Map, CreatePost, UpdatePost } from './pages';
import { SidebarWithHeader } from './components';
import { Button } from '@chakra-ui/react';
import { AddIcon, ArrowRightIcon } from '@chakra-ui/icons';

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <SidebarWithHeader children={(
        <>
        <header>
          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>
          <Link to='/create'>
            <Button colorScheme='green' variant='solid' leftIcon={<AddIcon />}>
              Create a Post
            </Button>
          </Link>
          <Link to='/map'>
            <Button colorScheme='blue' variant='solid' leftIcon={<ArrowRightIcon />}>
              Play Game
            </Button>
          </Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/update/:id" element={<UpdatePost />} />
          </Routes>
        </main>
        <footer>
          <img src={logo_full} alt="logo" />
        </footer>
        </>
      )} />
        
      
    </BrowserRouter>
  )
}

export default App