import { z } from "zod"

// use for phone nubmer input
const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

// validate email input
export const validateEmailSchema = z.object({
    email: z.string().email({
        message: "Your email address is invalid.",
      }),  })

// validate name input
export const validateNameSchema = z.object({
    name: z.string().min(2, {
        message: "Name is required",
      }),  })

// validate otp input
export const validateOtpSchema = z.object({
  otp: z.string().min(6, {
    message: "Wrong code, please try again. You can enter the wrong OTP code 4 more times",
  }),
})
