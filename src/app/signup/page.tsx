"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

export default function Signup() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    userName: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const onLogin = () => {
    router.push("/login");
  };

  const onSignUp = async () => {};

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.userName.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

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
          className="rounded-md p-[10px] text-black"
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
          className="rounded-md p-[10px] text-black "
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
          className="rounded-md p-[10px] text-black "
        />
        <button
          onClick={onSignUp}
          className={
            buttonDisabled
              ? "rounded-md p-[10px] text-orange-400 border-[1px] mt-2"
              : "rounded-md p-[10px] bg-green-600 mt-2 "
          }
        >
          {buttonDisabled ? "Please Enter All Fields " : "Sign Up "}
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
