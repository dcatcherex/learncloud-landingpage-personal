"use client";

import React, { Dispatch, SetStateAction, useState} from "react";
import { useFormStatus } from "react-dom";

import Link from "next/link";

import axios from "axios";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginMobileSchema } from "@/schemas";
import { useForm } from "react-hook-form";

import { CardWrapper } from "@/components/auth/card-wrapper";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

interface LoginMobileFormProps {
  phoneNumber?: React.RefObject<string>;
  phoneRef?: React.RefObject<string>;
  setActiveComponent?: Dispatch<SetStateAction<"LoginMobileForm" | "OtpForm">>;
}

const LoginMobileForm = ({
  phoneNumber,
  phoneRef,
  setActiveComponent,
}: LoginMobileFormProps) => {

  const { pending } = useFormStatus()

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginMobileSchema>>({
    resolver: zodResolver(LoginMobileSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginMobileSchema>) => {
    const formattedPhoneNumber = values.phoneNumber.replace(/-/g, "");

    phoneNumber.current = formattedPhoneNumber;

    console.log("formattedPhoneNumber: " + formattedPhoneNumber);
    console.log("process.env.HOST: " + process.env.NEXT_PUBLIC_HOST);

    setError("");
    setSuccess("");
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/auth/phone/login/requestrequest`,
        {
          phoneNumber: formattedPhoneNumber,
        }
      );

      console.log(response.data);

      phoneRef.current = response.data.ref;
      console.log("phoneRef: " + phoneRef.current);

      setSuccess("OTP request sent successfully.");

      // Delay the setActiveComponent call
      setTimeout(() => {
        setActiveComponent && setActiveComponent("OtpForm");
      }, 2000);
    } catch (error) {
      console.error(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Failed to send OTP request.");
      }
    }
  };

  return (
    <CardWrapper
      title="Log In"
      subTitle="Welcome back!"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
      showEmail
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-6 ">
              <>
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="border-slate-500 bg-white"
                          {...field}
                          placeholder="Phone Number"
                          type="string"

                          onChange={(e) => {
                            let value = e.target.value;
                            value = value.replace(/\D/g, "");
                            if (value.length > 3 && value.length <= 6) {
                              value = value.replace(
                                /^(\d{3})(\d{1,3})$/,
                                "$1-$2"
                              );
                            } else if (value.length > 6) {
                              value = value.replace(
                                /^(\d{3})(\d{3})(\d{1,4})$/,
                                "$1-$2-$3"
                              );
                            }
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.phoneNumber?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
              </>
            
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />

          <Button
            type="submit"
            className="w-full rounded-full"
            disabled={pending}
          >
            Continue
          </Button>
        </form>
      </Form>
      <div className="mt-4 flex items-center justify-center text-sm leading-normal text-slate-500 ">
        <p>Don’t have an account?</p>
        <span className="ml-2 font-semibold underline">
          <Link href={"/auth/register"}>SIGN UP</Link>
        </span>
      </div>
      <div className="mt-4 flex items-center">
        <div className="flex-1 border-b-2 border-slate-200"></div>
        <span className="px-3 text-sm font-medium text-slate-500">or</span>
        <div className="flex-1 border-b-2 border-slate-200"></div>
      </div>
    </CardWrapper>
  );
};
export default LoginMobileForm;
