import './App.css'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import HomePage from './pages/homepage';
import Registerpage from './pages/register';
import LoginPage from './pages/login';
import Redirect from './pages/redirect';
import ShortenUrl from './pages/shorten';

function App() {

  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />  
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/register" element={<Registerpage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/shorten" element={<ShortenUrl />} />
          
          <Route path="/url/:shorturl" element={<Redirect />} />

        </Routes>
      </div>
    </Router>

  )
}

export default App