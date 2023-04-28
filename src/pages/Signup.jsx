import React from "react";
import { Link } from "react-router-dom";

function login() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
      <h1>POI Signup:</h1>
        <form action="">
          <div className="mb-3">
            <label htmlFor="username"><strong>Username:</strong></label>
            <input type="username" placeholder="Enter Username:" className="form-control rounded-0"/>
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password:</strong></label>
            <input type="password" placeholder="Enter Password:" className="form-control rounded-0"/>
          </div>
          <br/>
          <button className="btn btn-success w-100">Login</button>
          <p/>
          <Link to="/signup" button className="btn btn-default w-100 bg-light rounded-0 text-decoration-none"/>
        </form>
      </div>
    </div>
  );
}

export default login;
