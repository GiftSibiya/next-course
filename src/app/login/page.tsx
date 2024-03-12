"use client";
import Link from "next/link";
import React from "react";

export default function Login() {
  const [login, setLogin] = React.useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = React.useState(false);

  const onLogin = async () => {};

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex  h-screen justify-center items-center">
      <div className=" flex flex-col">
        Login Page Right here
        <hr />
        <label htmlFor="email" className=" text-center">
          Email
        </label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          className="rounded-md p-[10px] "
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
        />
        <label htmlFor="password" className=" text-center">
          Password
        </label>
        <input
          id="password"
          type={showPassword ? "password" : "text"}
          placeholder="Password"
          className="rounded-md p-[10px] text-black "
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />
        <p
          onClick={onShowPassword}
          className="cursor-pointer text-center text-blue-500"
        >
          Show Password
        </p>
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
