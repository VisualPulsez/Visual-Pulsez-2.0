"use client";

import { useState } from "react";

export default function SigninPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignin = async () => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      alert(`Welcome, ${data.name}`);
      window.location.href = "/";
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleSignin}>Sign In</button>
    </div>
  );
}
