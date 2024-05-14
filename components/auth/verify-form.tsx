"use client";

import { useFormStatus } from "react-dom";
import {useState} from "react";

// validation
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { validateOtpSchema } from "@/schemas/auth-schemas";
import { authType } from "@/types/auth-type";

// components
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

// my components
import Social from "@/components/auth/social";
import Footer from "@/components/auth/footer";
import Header from "./header";
import Link from "next/link";
import Seperator from "../seperator";

const testLoginCode = 123456;

const VerifyForm = ({ email, otpRef }: authType) => {
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [submittedData, setSubmittedData] = useState("");
  const { pending } = useFormStatus();

  const form = useForm<z.infer<typeof validateOtpSchema>>({
    resolver: zodResolver(validateOtpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof validateOtpSchema>) => {
    console.log("OTP value = " + values.otp);
    // setSubmittedData(JSON.stringify(values));
    setSubmittedData(values.otp.toString());
    console.log("submittedData" + submittedData);
    if (values.otp !== testLoginCode.toString()) {
      setLoginAttempts(loginAttempts + 1);
      console.log("loginAttempts" + loginAttempts);
      }
    }
  

  return (
    <div className="max-w-96 h-[800px] rounded-lg p-4 bg-gradient-to-tr from-blue-500/30 via-purple-400/20 to-white">
      {/* header */}
      <Header
        title="Verify your email"
        description="Please enter OTP code sent to wannarat.kri@learncloud.cloud within 300s"
      />

      {/* form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-col justify-items-start">
                    <div className="text-gray-400 text-[10px] font-normal">
                      Ref: {otpRef?.current}
                    </div>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup className="mx-auto">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>

                    {form.formState.errors.otp && (
                      <div className="text-center text-red-400 text-xs font-normal mt-4">
                        <p>Wrong code, please try again</p>
                        <p>You can enter the wrong OTP code 4 more times</p>
                      </div>
                    )}
                    {}
                    {loginAttempts > 4  && (
                      <div className="text-center text-red-400 text-xs font-normal mt-4">
                        <p>
                          You entered the wrong OTP more than the allotted time.
                        </p>
                        <p>Please request a new OTP again</p>
                      </div>
                    )}
                    <div className="mt-4 text-center text-gray-500 text-xs font-normal">
                      Don&apos;t get a code ?
                      <Link
                        className="text-primary underline-offset-1"
                        href={""}
                      >
                        {" "}
                        Send again
                      </Link>
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <div className="h-80"></div>
          <Button
            type="submit"
            className="w-full rounded-2xl h-12 px-4 py-3 shadow text-base font-medium"
            disabled={pending}

            // in case, disable button until the input is valid
            // disabled={!form.formState.isValid}
          >
            Continue
          </Button>
        </form>
      </Form>

      {/* separator */}
      <Seperator details="or continue with"/>

      {/* social login buttons  */}
      <div className="flex justify-center">
        <Social />
      </div>

      {/* footer  */}
      <Footer />
    </div>
  );
};
export default VerifyForm;
