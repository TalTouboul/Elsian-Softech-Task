import React from "react";
import LoginForm from "./LoginForm";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      
      const response = await fetch("https://elysian-ada3era9fnbhc2c9.canadacentral-01.azurewebsites.net", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful: " + data.message);
        // אפשר לשמור טוקן/נתוני משתמש פה, או לנווט לעמוד אחר
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error");
    }
  }

  return (
    <div className="justify-center items-center">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full md:h-150 max-h-auto max-w-auto flex flex-col md:flex-row m-auto">
        
        {/* Left Side */}
        <div style={{ backgroundColor: "#3949AB" }} className="relative md:w-4/7 p-6 flex flex-col justify-center hidden md:block">
          <img
            src="src\assets\LOGO.png"
            alt="Logo"
            className="absolute start-3 top-3 m-2 size-10"
          />
          <div className="w-5/6 mx-auto place-items-center">
            <img
              src="src/assets/1.png"
              alt="Illustration"
              className="h-5/9 w-5/9 m-auto object-center mt-25"
            />

            <h2 className="text-xl">Welcome aboard my friend</h2>
            <p className="mt-1 text-xs opacity-90">
              Just a couple of clicks and we start
            </p>
          </div>

        </div>
          

        {/* Right Side */}
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

