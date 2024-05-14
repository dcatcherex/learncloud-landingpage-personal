"use client";

import { useFormStatus } from "react-dom";

// validation
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { validateEmailSchema } from "@/schemas/auth-schemas";
import { authType } from "@/types/auth-type";
import { AlertCircleIcon, CircleXIcon } from "lucide-react";
import { CircleAlertIcon } from "lucide-react";

// components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// my components
import Social from "@/components/auth/social";
import Footer from "@/components/auth/footer";
import Header from "./header";
import Image from "next/image";

const AuthForm = ({ email, otpRef }: authType) => {
  const { pending } = useFormStatus();

  const form = useForm<z.infer<typeof validateEmailSchema>>({
    resolver: zodResolver(validateEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof validateEmailSchema>) => {
    console.log(values);
  };

  return (
    <div className="max-w-96 h-[800px] rounded-lg p-4 bg-gradient-to-tr from-blue-500/30 via-purple-400/20 to-white">
      {/* header */}
      <Header
        title="What's your email?"
        description="We need it to look up your account or create a new one."
      />

      {/* form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    {" "}
                    {/* Add a relative div wrapper */}
                    <Input
                      className="h-12 px-4 py-3 bg-white/50 rounded-2xl border border-white text-gray-400 text-base font-normal"
                      placeholder="Email"
                      {...field}
                      // onFocus={() => {
                      //   form.clearErrors("email");
                      // }}
                    />
                    {form.formState.errors.email && ( // If there is an error
                      <Image
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500"
                        src={"/icon/alert-validate.svg"}
                        width={18}
                        height={18}
                        alt="error"
                      />
                    )}
                  </div>
                </FormControl>
                {form.formState.errors.email && (
                  <div className="flex h-6 px-2 py-1 bg-red-200 rounded-lg items-center gap-2 text-red-400 text-[10px] font-normal">
                    <AlertCircleIcon className=" size-4 text-red-400 text-[10px] font-normal" />
                    {form.formState.errors.email?.message}
                  </div>
                )}
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
      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-400"></div>
        <p className="mx-2 text-gray-400 text-sm">or continue with</p>
        <div className="flex-grow h-px bg-gray-400"></div>
      </div>

      {/* social login buttons  */}
      <div className="flex justify-center">
        <Social />
      </div>

      {/* footer  */}
      <Footer />
    </div>
  );
};
export default AuthForm;
