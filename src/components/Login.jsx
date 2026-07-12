import { useState } from "react";

function Login({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (!isLogin && !name) {
      alert("Please enter your name");
      return;
    }

    onLogin();
  };

  return (
    <section className="login-page">
      <div className="login-container">

        <img
          src={`${import.meta.env.BASE_URL}pinterest_icon.png`}
          className="login-logo"
          alt="Pinterest"
        />

        <h1>Welcome to Pinterest</h1>

        <div className="auth-toggle">

          <button
            className={`toggle-btn ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
            type="button"
          >
            Log In
          </button>

          <button
            className={`toggle-btn ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
            type="button"
          >
            Sign Up
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <>
              <label>Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </>
          )}

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="material-icons-outlined"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? "visibility_off" : "visibility"}
            </span>

          </div>

          {isLogin && (
            <a href="#" className="forgot">
              Forgot Password?
            </a>
          )}

          <button className="login-btn" type="submit">
            {isLogin ? "Log In" : "Sign Up"}
          </button>

        </form>

        <p className="or">OR</p>

        <button className="google-btn">

          <img
            src={`${import.meta.env.BASE_URL}googleimage.png`}
            alt="Google"
          />

          <p>Continue with Google</p>

        </button>

        <div className="qr-box">

          <h3>Log in instantly</h3>

          <p>
            Scan this QR code with your phone
            to login on the app.
          </p>

          <div className="qr-circle"></div>

        </div>

        {isLogin && (
          <p className="signup">
            New to Pinterest?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLogin(false);
              }}
            >
              Join for free
            </a>
          </p>
        )}

      </div>
    </section>
  );
}

export default Login;