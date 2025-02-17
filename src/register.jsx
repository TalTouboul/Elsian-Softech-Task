import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const response = await fetch("https://elysian-ada3era9fnbhc2c9.canadacentral-01.azurewebsites.net/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("User created successfully: " + data.message);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error");
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}
