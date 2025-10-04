import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handleVerify = async () => {
    const res = await fetch("http://localhost:5000/api/otp/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();
    if (res.ok) navigate("/dashboard");
    else alert(data.message);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Enter OTP sent to {email}</h1>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="OTP"
        className="border p-2 m-2"
      />
      <button onClick={handleVerify} className="bg-green-500 text-white p-2">
        Verify OTP
      </button>
    </div>
  );
};

export default VerifyOtp;
