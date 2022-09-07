import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../../firebase.init";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleUserSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>

            <input
              onBlur={handlePasswordBlur}
              type={showPassword ? "text" : "password"}
              name="password"
              required
            />
            <span onClick={toggleShowPassword} className="show-password">
              {showPassword ? "hide" : "show"}
            </span>
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loading...</p>}
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Shoe-Shop?{" "}
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
