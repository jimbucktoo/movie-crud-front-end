import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary button"
      onClick={() => loginWithRedirect()}
    >
      Get Started
    </button>
  );
};

export default Login;
