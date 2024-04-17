"use client";

import axios from "axios";

import * as z from "zod";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OtpSchema } from "@/schemas";
import { CardWrapper2 } from "../card-wrapper2";

import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginMobile } from "@/actions/login-mobile";

interface OtpFormProps {
  phoneNumber?: React.RefObject<string>;
  phoneRef?: React.RefObject<string>;
  code?: React.RefObject<number>;
  setActiveComponent?: Dispatch<SetStateAction<"LoginMobileForm" | "OtpForm">>;

}

const OtpForm = ({
  phoneNumber,
  phoneRef,
  code,
  setActiveComponent,
}: OtpFormProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const code2Ref = React.useRef<HTMLInputElement>(null);
  const code3Ref = React.useRef<HTMLInputElement>(null);
  const code4Ref = React.useRef<HTMLInputElement>(null);
  const code5Ref = React.useRef<HTMLInputElement>(null);
  const code6Ref = React.useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof OtpSchema>>({
    resolver: zodResolver(OtpSchema),
    defaultValues: {
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
    },
  });

  const hasError = ["code1", "code2", "code3", "code4", "code5", "code6"].some(
    (code) => form.formState.errors[code]
  );

  
  return (
    <div className="">
      <CardWrapper2
        title="Confirm your number"
        subTitle={`Enter the code we sent over SMS to ${phoneNumber?.current}`}
      >
        <div className="mb-1 text-xs leading-normal">Ref : {phoneRef?.current}</div>
        <Form {...form}>
          <form className="space-y-6">
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="code1"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        maxLength={1}
                        className={`border-slate-500 bg-white text-center ${
                          form.formState.errors.code1 &&
                          "border-2 border-red-500"
                        }`}
                        {...field}
                        type="string"
                        onChange={(e) => {
                          field.onChange(e);
                          if (e.target.value.length === 1) {
                            if (code2Ref.current) {
                              code2Ref.current.focus();
                            }
                          }
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="code2"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-slate-500 bg-white text-center"
                        {...field}
                        type="string"
                        ref={code2Ref}
                        onChange={(e) => {
                          field.onChange(e);
                          if (e.target.value.length === 1) {
                            if (code3Ref.current) {
                              code3Ref.current.focus();
                            }
                          }
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="code3"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-slate-500 bg-white text-center"
                        {...field}
                        type="string"
                        ref={code3Ref}
                        onChange={(e) => {
                          field.onChange(e);
                          if (e.target.value.length === 1) {
                            if (code4Ref.current) {
                              code4Ref.current.focus();
                            }
                          }
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="code4"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-slate-500 bg-white text-center"
                        {...field}
                        type="string"
                        ref={code4Ref}
                        onChange={(e) => {
                          field.onChange(e);
                          if (e.target.value.length === 1) {
                            if (code5Ref.current) {
                              code5Ref.current.focus();
                            }
                          }
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="code5"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-slate-500 bg-white text-center"
                        {...field}
                        type="string"
                        ref={code5Ref}
                        onChange={(e) => {
                          field.onChange(e);
                          if (e.target.value.length === 1) {
                            if (code6Ref.current) {
                              code6Ref.current.focus();
                            }
                          }
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="code6"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Email</FormLabel> */}
                    <FormControl>
                      <Input
                        maxLength={1}
                        className="border-slate-500 bg-white text-center"
                        {...field}
                        type="string"
                        ref={code6Ref}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />

            <p className="text-center text-sm">
              {hasError && <FormMessage>All fields must be filled</FormMessage>}
            </p>

            <p className="text-center text-sm">
              Don’t get a code ?{" "}
              <span
                onClick={() => console.log("click")}
                className="font-semibold underline"
              >
                {" "}
                Send again
              </span>
            </p>

            <Button type="submit" className="w-full rounded-full">
              Continue
            </Button>
          </form>
        </Form>
      </CardWrapper2>
    </div>
  );
};
export default OtpForm;
