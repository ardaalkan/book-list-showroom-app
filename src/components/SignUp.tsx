import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AutContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    try {
      //password does not exist on type 'string'.
      await signUp(email, password);
      navigate('/favorites')
    } catch (e: any) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold mb-12">Sign Up</h1>
        {error ? <p className="bg-red-300 p-3 my-2">{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className="flex display-row my-2 first-letter:my-2 w-full relative rounded-2xl shadow-xl">
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="email"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="flex display-row my-2 w-full relative rounded-2xl shadow-xl">
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="password"
                name=""
                id=""
              />
            </div>
          </div>
          <button className="w-full my-2 p-3 rounded-2xl shadow-xl bg-slate-100">
            Sign Up
          </button>
        </form>
        <p className="my-4">
          Already have an account?{" "}
          <Link to="/signIn" className="text-accent">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
