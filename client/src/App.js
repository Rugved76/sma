import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; import './App.css';
import Auth from './Pages/auth/Auth';
import Home from './Pages/home/Home';
import Profile from './Pages/profile/Profile';

function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>

    <Router>
      <Routes>
        {/* <Route path='/' element={user ? <Navigate to='home' /> : <Navigate to='auth' />} /> */}
        {/* <Route path='/home' element={user ? <Home /> : <Navigate to='../auth' />} /> */}
        {/* <Route path='/auth' element={user ? <Navigate to='../home' /> : <Auth />} /> */}
        {/* <Route path='/profile/:id' element={user ? <Profile /> : <Navigate to='../auth' />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;