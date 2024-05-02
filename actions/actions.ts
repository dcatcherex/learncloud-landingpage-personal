"use server";

import { sessionOptions, SessionData, defaultSession } from "@/lib/lib";
import { LoginProps } from "@/types/auth-type";
import { getIronSession } from "iron-session";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

let username = "john";
let isPro = true;
let isBlocked = true;

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
      session.isLoggedIn = defaultSession.isLoggedIn;
    }
    
    // check the user in db
    

  return session;
};
export const login = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const session = await getSession();

  const formUsername = formData.get("username") as string;
  const formPassword = formData.get("password") as string;

  // check user in the db
  // const user = await db.getUser({username, password})

  if (formUsername !== username) {
    return { error: "Invalid username" };
  }

  session.userId = "1";
  session.username = formUsername;
  session.isPro = isPro;
  session.isLoggedIn = true;

  await session.save();
  redirect("/");
};
export const loginOtp = async (
  prevState: { error: undefined | string },
  result: LoginProps
) => {
  const session = await getSession();
  if (result && result.user && result.token) {
  session.userId = result.user.id;
  session.email = result.user.email;
  session.firstName = result.user.firstName;
  session.lastName = result.user.lastName;
  session.phoneNumber= result.user.phoneNumber;
  session.accessToken = result.token.accessToken;
  session.isPro = isPro;
  session.isLoggedIn = true;

  await session.save();
  console.log("session from loginOTP ", session);
  }

  redirect("/");
};
export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export const changePremium = async () => {
  const session = await getSession();
  session.isPro = !session.isPro;
  await session.save();
  revalidatePath("/profile");
};

export const changeUsername = async (formData: FormData) => {
  const session = await getSession();

  const newUsername = formData.get("username") as string;

  session.username = newUsername;
  await session.save();
  revalidatePath("/profile");
};
