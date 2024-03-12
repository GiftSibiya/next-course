"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

export default function Signup() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    userName: "",
  });

  const onSignUp = async () => {};

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col">
        <h1 className="text-center">Sign up Here</h1>
        <hr />
        <label htmlFor="userName" className="text-center">
          User Name
        </label>
        <input
          id="userName"
          type="text"
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
          placeholder="User Name"
          className="rounded-md p-[10px] "
        />
        <label htmlFor="email" className="text-center">
          Email
        </label>
        <input
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
          className="rounded-md p-[10px] "
        />
        <label htmlFor="password" className="text-center">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
          className="rounded-md p-[10px] "
        />
        <button
          onClick={onSignUp}
          className="rounded-md p-[10px] bg-slate-500 mt-[20px] text-white"
        >
          {" "}
          Sign up
        </button>
        <div className="flex flex-col text-center justify-center">
          <p>Already Have an Account? </p>
          <Link
            href={"/login"}
            className="text-blue-600 underline font-semibold"
          >
            {" "}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
