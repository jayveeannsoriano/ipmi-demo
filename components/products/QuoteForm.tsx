"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  company: z.string().optional(),
  employeeCount: z.string().optional(),
  message: z.string().optional(),
})
type FormData = z.infer<typeof schema>

/**
 * QuoteForm — quote request form used for Health Compass.
 * Validates with zod + react-hook-form and shows inline error messages.
 */
export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(_data: FormData) {
    // Simulated submission — replace with real API call
    await new Promise((r) => setTimeout(r, 800))
    if (typeof window !== "undefined") {
      const dl = (window as unknown as { dataLayer?: unknown[] }).dataLayer
      if (dl) dl.push({ event: "ipmi_quote_submitted" })
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        aria-live="polite"
        className="space-y-3 rounded-lg border border-primary/30 bg-primary/5 p-8 text-center"
      >
        <div className="text-3xl">✦</div>
        <h3 className="text-lg font-semibold">Quote request received</h3>
        <p className="text-sm text-muted-foreground">
          A specialist will be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <form
      id="quote-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-4"
      aria-label="Health Compass quote request form"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="firstName" className="text-sm font-medium">
            First name{" "}
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            {...register("firstName")}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
            placeholder="Jane"
          />
          {errors.firstName && (
            <p
              id="firstName-error"
              role="alert"
              className="text-xs text-destructive"
            >
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="lastName" className="text-sm font-medium">
            Last name{" "}
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            {...register("lastName")}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
            placeholder="Smith"
          />
          {errors.lastName && (
            <p
              id="lastName-error"
              role="alert"
              className="text-xs text-destructive"
            >
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium">
          Email address{" "}
          <span aria-hidden="true" className="text-destructive">
            *
          </span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
          placeholder="jane@company.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-xs text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone number{" "}
          <span aria-hidden="true" className="text-destructive">
            *
          </span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          {...register("phone")}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
          placeholder="+44 7000 000000"
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="text-xs text-destructive">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="company" className="text-sm font-medium">
            Company name
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            {...register("company")}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
            placeholder="Acme Corp (optional)"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="employeeCount" className="text-sm font-medium">
            Number of employees
          </label>
          <select
            id="employeeCount"
            {...register("employeeCount")}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
          >
            <option value="">Select range</option>
            <option value="1-10">1–10</option>
            <option value="11-50">11–50</option>
            <option value="51-200">51–200</option>
            <option value="200+">200+</option>
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium">
          Additional notes
        </label>
        <textarea
          id="message"
          rows={3}
          {...register("message")}
          className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
          placeholder="Any specific requirements or questions…"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending…" : "Request a Quote"}
      </Button>
    </form>
  )
}
