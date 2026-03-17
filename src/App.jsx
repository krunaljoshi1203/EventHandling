import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {

  const [count, setcount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [text, settext] = useState("");

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submittedData, setSubmittedData] = useState(null);

  const [toggler, settoggler] = useState(true)

  const increase = () => {
    setcount(count + 1);
    setShowMessage(true);
  }

  const reset = () => {
    setcount(0)
    setShowMessage(false);
  }

  const change = (e) => {
    settext(e.target.value)
  }

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const massage = () => { 
    settoggler(!toggler) }

  return (
    <>
      <h1 className='hading'>Event Handling</h1>

      <div className='main'>
        <div className='first'>
          <h1>{count}</h1>
          <div className='btndiv'>
            <button onClick={increase}>Count Me</button>
            <button onClick={reset}>Reset Me</button>
            {showMessage && <p>Button was clicked by {count}!</p>}
          </div>
        </div>
      </div>

      <div className='main'>
        <div className='first'>
          <input type="text" value={text} onChange={change} placeholder='Typing....' />
          <p>You Typed : {text}</p>
        </div>
      </div>

      <div className='main'>
        <form onSubmit={handleSubmit} className='first'>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
          <br /><br />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
          <br /><br />
          <button type="submit">Submit</button>

          {submittedData && (
            <div>
              <h3>Submitted Data:</h3>
              <p>Name: {submittedData.name}</p>
              <p>Email: {submittedData.email}</p>
            </div>)}
        </form>
      </div>

      <div className='main'>
        <div className='last'>
          <button onClick={massage}>{toggler ? "Hide" : "Show"}Text</button>
          {toggler && <p>This text can be toggled!</p>}
        </div>
      </div>
    </>
  )
}

export default App