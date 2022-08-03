import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import Dashboard from './pages/Dashboard.js'
import Users from './pages/Users.js'
import Managers from './pages/Managers.js'
import Books from './pages/Books.js'
import Boards from './pages/Boards.js'
import Notices from './pages/Notices.js'
import HelpCenter from './pages/HelpCenter.js'
import Login from './pages/Login.js'
import Error from './pages/Error.js'
import Test from './pages/Test.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/cookieboard/*" element={<Dashboard/>}>
            <Route path="users" element={<Users/>}/>
            <Route path="managers" element={<Managers/>}/>
            <Route path="books" element={<Books/>}/>
            <Route path="boards" element={<Boards/>}/>
            <Route path="notices" element={<Notices/>}/>
            <Route path="helpcenter" element={<HelpCenter/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
