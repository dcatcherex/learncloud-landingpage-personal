import { Button } from "../ui/button";

const AuthFormSimple = () => {
  return (
    <section className="flex min-h-screen flex-1 flex-col justify-center  sm:px-6 lg:px-8 bg-gray-200  ">
      <div className=" mx-auto bg-white sm:w-full lg:max-w-[500px] p-4 lg:rounded-lg">
        <h1 className="font-semibold text-xl">Jone Form</h1>
        <h1>What is your email</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, corporis.</p>
        <form
        className=" flex flex-col justify-between gap-4 h-[500px] "
        action="">
            <input
            className="border-2 w-full"
            type="text" />
            
            <Button className="w-full">Continue</Button>
        </form>
        <p>Or with other sign up</p>
        <Button>Google</Button>
        <Button>Apple</Button>
      </div>
    </section>
  );
};
export default AuthFormSimple;
