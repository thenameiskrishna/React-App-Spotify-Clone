import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://www.logolynx.com/images/logolynx/eb/eb6936da3022eaf21d0f15dccecc7755.jpeg"
        alt=""
      />
      <a href={accessUrl}>TUNE YOUR HEAD WITH RADIO HEAD</a>
    </div>
  );
}

export default Login;
