
import './style.scss';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext';
import { useContext } from 'react'


function App() {

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }
  }

  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
          <Route path='/'>

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
