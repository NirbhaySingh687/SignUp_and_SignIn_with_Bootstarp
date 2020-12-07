import React, { useState } from "react"
import {Route,Switch,Redirect} from "react-router-dom"
//toast
import "react-toastify/dist/ReactToastify.min.css"
//component
import Home from './Home'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { UserContext } from "../context/UserContext"
import Header from "./layout/Header"
import Footer from "./layout/Footer"


function Main(){
  const [user,setUser] = useState(null)
  return(
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
  )
}

export default Main;