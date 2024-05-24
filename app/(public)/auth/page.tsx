"use client";

import AuthForm from "@/components/auth/auth-form";
import VerifyForm from "@/components/auth/verify-form";
import WelcomeForm from "@/components/auth/welcome-form";
import WelcomeScreen from "@/components/auth/welcome-screen";
import { useRef } from "react";


const Auth = () => {
  let email = useRef<string>("");
  let otpRef = useRef<string>("");

  return (
    <div className="flex justify-center ">
      <AuthForm email={email} otpRef={otpRef} />
      {/* <VerifyForm email={email} otpRef={otpRef} /> */}
      {/* <WelcomeForm /> */}
      {/* <WelcomeScreen /> */}
    </div>
  );
};
export default Auth;
