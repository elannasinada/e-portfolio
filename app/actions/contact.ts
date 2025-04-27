"use server"

import { z } from "zod"

// Define the schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

// Type for the form data
export type ContactFormData = z.infer<typeof contactFormSchema>

// Type for the response
export type ContactFormResponse = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function submitContactForm(formData: FormData): Promise<ContactFormResponse> {
  // Simulate a delay to mimic network request
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = contactFormSchema.safeParse(data)

    if (!validatedData.success) {
      // Return validation errors
      return {
        success: false,
        message: "Please fix the errors in the form",
        errors: validatedData.error.flatten().fieldErrors,
      }
    }

    // In a real application, you would send an email here
    // For example, using a service like SendGrid, Mailgun, etc.
    console.log("Form submission:", validatedData.data)

    // Return success response
    return {
      success: true,
      message: "Your message has been sent successfully! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error submitting form:", error)

    // Return error response
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
