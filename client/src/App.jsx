import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo, logo_full } from './assets';
import { Home, CreatePost } from './pages';

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
        <Link to='/test'>
          <button>Create a Post</button>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<CreatePost />} />
        </Routes>
      </main>
      <footer>
        <img src={logo_full} alt="logo" />
      </footer>
    </BrowserRouter>
  )
}

export default App