import { z } from "zod";
import { useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import { validateNameSchema } from "@/schemas/auth-schemas";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";

type WelcomeNameProps = {
  name: string;
};



const WelcomeName = ({ name }: WelcomeNameProps) => {

  const form = useForm<z.infer<typeof validateNameSchema>>({
    resolver: zodResolver(validateNameSchema),
    defaultValues: {
      name: "",
    },
  });
  
  const onSubmit = async (values: z.infer<typeof validateNameSchema>) => {
    console.log("name value = " + values.name);
    
  };

  return (
    <div>
      <div className="text-gray-800 text-base font-medium my-6">
        What is your name?
        </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-col justify-items-start">
                    <Input {...field}
                    className="rounded-xl border border-white"
                    placeholder="Name" />

                    {form.formState.errors.name && (
                      <div className="text-center text-red-400 text-xs font-normal mt-4">
                        <p>Wrong code, please try again</p>
                        <p>You can enter the wrong OTP code 4 more times</p>
                      </div>
                    )}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <div className="h-80"></div>
        </form>
      </Form>
    </div>
  );
};
export default WelcomeName;
