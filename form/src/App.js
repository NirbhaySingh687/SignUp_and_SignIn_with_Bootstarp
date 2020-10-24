import React, { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
//toast
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
//router
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { UserContext } from "./context/UserContext"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"


function App(){
  const [user,setUser] = useState(null)
  return(
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user,setUser}}>
        <Header />
        <Switch>
        <Route exact path='/home'  render={props => user ? (
              <Home {...props}/>
              ) : (
              <Redirect to="/signin"/>)}/>

        <Route exact path='/signin' render={props => !user ? (
              <SignIn {...props}/>
              ) : (
              <Redirect to="/home"/>)}/>
              
        <Route exact path='/signup' render={props => !user ? (
              <SignUp {...props}/>
              ) : (
              <Redirect to="/home"/>)}/>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  )
}

export default App;