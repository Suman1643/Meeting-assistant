import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Divide } from 'lucide-react';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/signin' element={<SignIn/>} />
    </Routes>
   </Router>
  )
}

export default App
