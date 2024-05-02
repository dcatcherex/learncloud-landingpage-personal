"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// const key = new TextEncoder().encode(process.env.AUTH_SECRET);

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

const REGISTER_REQUEST_OTP_URL = process.env.REGISTER_REQUEST_OTP_URL;
const REGISTER_VERIFY_OTP_URL = process.env.REGISTER_VERIFY_OTP_URL;
const REGISTER_USER_DETAIL_URL = process.env.REGISTER_USER_DETAIL_URL;

const LOGIN_REQUEST_OTP_URL = process.env.LOGIN_REQUEST_OTP_URL;
const LOGIN_VERIFY_OTP_URL = process.env.LOGIN_VERIFY_OTP_URL;

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.error("Error verifying JWT:", error);
    throw error;
  }
}

// register actions

export async function requestOtp(phoneNumber: string, mode?: string) {
  console.log("mode", mode);
  try {
    if (mode === "register") {
      const response = await fetch(REGISTER_REQUEST_OTP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber,
        }),
      });

      const myJson = JSON.stringify({
        phoneNumber,
      });

      console.log(phoneNumber);
      console.log("myJson", myJson);

      const refJson = await response.json();
      console.log(refJson);

      return refJson;
    } else {
      const response = await fetch(LOGIN_REQUEST_OTP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber,
        }),
      });

      const myJson = JSON.stringify({
        phoneNumber,
      });

      console.log(phoneNumber);
      console.log("myJson", myJson);

      const refJson = await response.json();
      console.log(refJson);

      return refJson;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function verifyOtp(verifyDetail: object, mode?: string) {
  console.log("mode ", mode);
  console.log("verifyDetail ", verifyDetail);
  console.log("stringify verifyDetail ", JSON.stringify(verifyDetail));
  try {
    if (mode === "register") {
      const response = await fetch(REGISTER_VERIFY_OTP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verifyDetail),
      });

      const successJson = await response.json();
      console.log(successJson);

      return successJson;
    } else {
      const response = await fetch(LOGIN_VERIFY_OTP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verifyDetail),
      });

      const successJson = await response.json();
      console.log(successJson);

      return successJson;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function regisUserDetail(regisDetail: object) {
  console.log("regisDetail in action ", regisDetail);
  console.log("stringify regisDetail ", JSON.stringify(regisDetail));

  try {
    const response = await fetch(REGISTER_USER_DETAIL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(regisDetail),
    });

    const credentialJson = await response.json();
    console.log("credentialJson", credentialJson);

    if (credentialJson.hasOwnProperty("token")) {
      console.log("continue create session");
      const user = {
        id: credentialJson.user.id,
        phoneNumber: credentialJson.user.phoneNumber,
        email: credentialJson.user.email,
        firstname: credentialJson.user.firstname,
        lastname: credentialJson.user.lastname,
        accessToken: credentialJson.token.accessToken,
        refreshToken: credentialJson.token.refreshToken,
      };

      // Create the session
      // const expires = new Date(Date.now() + 10 * 1000);
      const expires = new Date(Date.now() + 60 * 60 * 1000);
      const session = await encrypt({ user, expires });

      // Save the session in a cookie
      cookies().set("session", session, { expires, httpOnly: true });
    } else {
      console.log("error");
      console.log(
        credentialJson.hasOwnProperty("message") && credentialJson.message
      );
    }
  } catch (error) {
    console.error(error);
  }
}

export async function createCookie(token: object) {
  const testToken = {
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMzYzYxZTMyLTJhMDYtNGQyYy04NTZlLWQxNDAyMzIyYjllMSIsInRva2VuSWQiOiI5YTNmZjY4MC1kNDIzLTRlYzMtOTllOS1iYjhmODFiZWU1MjgiLCJpYXQiOjE3MDg2MTA0MzgsImV4cCI6MTcwODY5NjgzOH0.mWyQPbtqYV88CMyHNdS4C7LR1fxFRrX5PWhGy-7WA9s",
  };
  // Create the session
  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ token, expires });

  // Save the session in a cookie
  cookies().set("session", session, { expires, httpOnly: true });

  return true;
}
// login actions

export async function login(formData: FormData) {
  // Verify credentials && get the user

  const user = {
    email: formData.get("email"),
    name: "John",
    value: formData.get("additionValue"),
  };

  // Create the session
  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ user, expires });

  // Save the session in a cookie
  cookies().set("session", session, { expires, httpOnly: true });
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
