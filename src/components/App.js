import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Signup from "./Signup"
import LinkedAccounts from "./LinkedAccounts"
import Tester from "./Tester"



function App() {
  return (
  <AuthProvider> 
    <Router>
      <Routes>
        <Route exact path='/' element={<PrivateRoute/>}>
          <Route exact path='/' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </Router>
    <Container 
      className="m0 d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh"}}
      >
      <div className="w-100" style={{ maxWidth: "400px"}}> 
        <Router>
            <Routes>
              <Route exact path='/update-profile' element={<UpdateProfile/>}/>
              <Route path="/signup" element={<Signup />}/>
              <Route exact path = "/login" element= {<Login />}/>
              <Route path="/forgot-password" element={<ForgotPassword/>}/>
              <Route path="/linked-accounts" element={<LinkedAccounts/>}/>
              <Route path="/tester" element={<Tester/>}/>
            </Routes>
        </Router>
      </div>
    </Container>
  </AuthProvider>
  )
}

export default App
