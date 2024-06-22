import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import EditPage from './components/edit/EditPage'
import { LoginForm } from './components/LoginForm'
import { SignupForm } from './components/SignupForm'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/edit' element={<EditPage />}/>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/register' element={<SignupForm />}/>
      </Routes>
      {/* <Dashboard /> */}
      {/* <EditPage /> */}
    </div>
  )
}

export default App
