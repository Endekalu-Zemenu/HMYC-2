import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import EditPage from './components/edit/EditPage'
import { LoginForm } from './components/LoginForm'
import { SignupForm } from './components/SignupForm'
import { NewUser } from './components/NewUser'
import { Users } from './components/Users'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/edit' element={<EditPage />}/>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/register' element={<SignupForm />}/>
        <Route path='/new' element={<NewUser />}/>
      </Routes>
      {/* <Dashboard /> */}
      {/* <EditPage /> */}
    </div>
  )
}

export default App
