
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/Dashboard";
import SendMoney from './pages/SendMoney';
function App() {

  return ( 
  <div>
      <Router>
        <Routes>
          <Route path="/send" element={<SendMoney />} />
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        </Router>
        </div>
  )
}
export  default App
