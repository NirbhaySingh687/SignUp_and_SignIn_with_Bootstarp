import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
//toast
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
//router
import {BrowserRouter as Router} from "react-router-dom"
import Main from "./components/Main";


function App(){
  return(
    <Router>
      <ToastContainer />
      <Main />
    </Router>
  )
}

export default App;