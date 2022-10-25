import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/Home");
    }
  }, [user]);

  return (
    <div>
      <h1 className="title">What Now?</h1>
      <div className="google-button">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Signin;
