import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import Home from './pages/Home.js'
import Users from './pages/Users.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Home/>}>
            <Route path=":users" element={<Users/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
