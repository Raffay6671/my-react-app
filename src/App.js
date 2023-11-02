import React from 'react';
import './App.css'; // Import a CSS file for styling

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-heading">Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="passw">Password</label>
          <input type="password" name="passw" id="passw" placeholder="Enter your password" />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
