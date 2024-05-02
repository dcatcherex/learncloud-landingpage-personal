import Reac from "react";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function SignOut() {
  return (
  <form
    action={async () => {
      "use server";
      await signOut();
    }}
  >
    <Button type="submit">Sign out</Button>
  </form>)
}

const Header = async (props: Props) => {
  const session = await auth();
  console.log(session);

  return (
    <header>
      <nav>
        <div>
          <h1>Learn Cloud</h1>
        </div>
        {session?.user ? (
          <div>
            {session.user.name && session.user.image && (
              <Image
                src={session.user.image}
                width={40}
                height={40}
                alt="avatar"
                className="rounded-full"
              />
            )}
            <SignOut />
          </div>
        ) : (
          <Link href="/api/auth/signin">
            <Button>Sign in</Button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
