import './App.css'
import React,{ Fragment } from 'react'
import Form from './Components/Form'

function App() {
  return (
    <Fragment>
      <div className="container">
        <h1>Create Account</h1>
        <div className="form_wrapper">
          <Form />
        </div>
      </div>
    </Fragment>
  )
}

export default App
