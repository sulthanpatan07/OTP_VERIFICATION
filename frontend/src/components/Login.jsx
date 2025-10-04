import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    await fetch("ttps://your-backend-on-render.onrender.com/api/otp/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    navigate("/verify", { state: { email } });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Enter Email</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 m-2"
      />
      <button onClick={handleSendOtp} className="bg-blue-500 text-white p-2">
        Send OTP
      </button>
    </div>
  );
};

export default Login;
