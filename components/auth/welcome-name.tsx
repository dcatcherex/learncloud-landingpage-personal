type WelcomeNameProps = {
    name: string;
}

const WelcomeName = ({name}: WelcomeNameProps) => {
  return (
    <div>WelcomeName
        {name}

        {/* form
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-col justify-items-start">
                    <Input {...field} placeholder="OTP code" />

                    {form.formState.errors.otp && (
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
      </Form> */}
    </div>
  )
}
export default WelcomeName