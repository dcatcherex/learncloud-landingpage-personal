"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";

import axios from "axios";

import * as z from "zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterMobileSchema } from "@/schemas";
import { ActiveFormProps } from "@/types/types";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
// import { register } from "@/actions/register";
import Link from "next/link";

interface RegisterMobileFormProps extends ActiveFormProps {
  phoneNumber?: React.RefObject<string>;
  phoneRef?: React.RefObject<string>;
}
const RegisterMobileForm = ({
  phoneNumber,
  phoneRef,
  setActiveComponent,
}: RegisterMobileFormProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof RegisterMobileSchema>>({
    resolver: zodResolver(RegisterMobileSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterMobileSchema>) => {
    const formattedPhoneNumber = values.phoneNumber.replace(/-/g, "");

    phoneNumber.current = formattedPhoneNumber;

    console.log("formattedPhoneNumber: " + formattedPhoneNumber);
    console.log("process.env.HOST: " + process.env.NEXT_PUBLIC_HOST);

    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/auth/phone/register/request`,
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
      title="Sign Up"
      subTitle=""
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
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
          <Button type="submit" className="w-full rounded-full">
            Create an account
          </Button>
        </form>
      </Form>
      <div className="mt-4 flex items-center justify-center text-sm leading-normal text-slate-500 ">
        <p>Don’t have an account?</p>
        <span className="ml-2 font-semibold underline">
          <Link href={"/auth/login"}>LOG IN</Link>
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
export default RegisterMobileForm;
