import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa6"; // Using FA6 thin icons

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Simple email regex check:
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Form is valid only if both fields are filled and email is valid
  const formIsValid = emailIsValid && password.trim().length > 0;

  return (
    <div className="md:w-3/7 p-6 flex flex-col justify-center items-center">
      <img
        src="src/assets/Dark Logo.png"
        alt="Logo"
        className="h-1/7 w-1/7 mx-auto object-center mt-12 mb-6 block md:hidden" 
      />
      <h3 style={{ color: "#646cff" }} className="text-xl font-semibold mb-10">
        Log in
      </h3>
      <form className="w-5/6">
        {/* Email Input */}
        <label className="block">
          <div className="relative ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaEnvelope className="text-gray-400"/>
            </div>
            <input
              required
              type="email"
              value={email}
             onChange={(e) => setEmail(e.target.value)}
              className="peer w-full"
              style={{paddingLeft:"36px"}}
              placeholder="Email"
            />
          </div>
        </label>

        {/* Password Input */}
        <label className="block w-full mt-3">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaLock className="text-gray-400" />
            </div>
            <input
              required
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="peer w-full"
              style={{paddingLeft:"36px" , paddingRight:"36px"}}
              placeholder="Password"
            />
            {/* Eye Icon for Toggle Password */}
            <button
              type="button"
              className="password-btn absolute inset-y-0 right-0 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />  }
            </button>
          </div>
        </label>  

        {/* Forgot Password */}
        <div className="text-right mt-2">
          <a href="#" className="text-xs">
            Forgot password?
          </a>
        </div>

        {/* Main Login Button */}
        <button
          type="button"
          disabled={!formIsValid}
          className={`
            w-full py-3 rounded-full mt-3 purple-btn
            ${formIsValid ? "block" : "disabled"}
          `}
        >
          Log in
        </button>
      </form>

      

      <div className="w-5/6">

        {/* OR Separator */}
        <div className="flex items-center justify-center my-1 text-gray-400">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-sm">Or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-4">
          <button className="w-full flex items-center gap-2 px-6 py-2">
            <FaGoogle className="text-gray-600" />
            Google
          </button>
          <button className="w-full flex items-center gap-2 px-6 py-2">
            <FaFacebook className="text-gray-600" />
            Facebook
          </button>
        </div>

        {/* Register Link */}
        <p className="mt-6 text-center text-gray-600 text-xs">
          Have no account yet?
        </p>

        {/* Button */}
        <button className="w-full mt-2">
          Register
        </button>
      </div>

    </div>
  );
}