"use client"

import { useTranslations } from "@/hooks/use-translations"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Loader2 } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import { AnimatedButton } from "@/components/ui/animated-button"
import { useThemePersistence } from "@/hooks/use-theme-persistence"
import { submitContactForm, type ContactFormResponse } from "@/app/actions/contact"
import { useState, useTransition } from "react"
import { useToast } from "@/hooks/use-toast"
import { useLanguagePersistence } from "@/hooks/use-language-persistence"

export default function ContactPage() {
  const t = useTranslations()
  useThemePersistence()
  useLanguagePersistence()
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition()
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  async function handleSubmit(formData: FormData) {
    setErrors({})

    startTransition(async () => {
      try {
        const response: ContactFormResponse = await submitContactForm(formData)

        if (response.success) {
          toast({
            title: t.contact.form.successTitle,
            description: response.message,
            variant: "success",
          })

          // Reset the form
          const form = document.getElementById("contact-form") as HTMLFormElement
          form?.reset()
        } else {
          toast({
            title: t.contact.form.errorTitle,
            description: response.message,
            variant: "destructive",
          })

          // Set field errors if any
          if (response.errors) {
            setErrors(response.errors)
          }
        }
      } catch (error) {
        toast({
          title: t.contact.form.errorTitle,
          description: t.contact.form.unexpectedError,
          variant: "destructive",
        })
      }
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t.contact.title}</h1>
      </FadeIn>

      <div className="max-w-2xl mx-auto">
        <FadeIn delay={0.2}>
          <p className="text-center text-lg mb-8">{t.contact.description}</p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <form id="contact-form" action={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t.contact.form.name}</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={t.contact.form.namePlaceholder}
                  required
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t.contact.form.email}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  required
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email[0]}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">{t.contact.form.subject}</Label>
              <Input
                id="subject"
                name="subject"
                placeholder={t.contact.form.subjectPlaceholder}
                required
                className={errors.subject ? "border-red-500" : ""}
              />
              {errors.subject && <p className="text-sm text-red-500">{errors.subject[0]}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t.contact.form.message}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t.contact.form.messagePlaceholder}
                rows={6}
                required
                className={errors.message ? "border-red-500" : ""}
              />
              {errors.message && <p className="text-sm text-red-500">{errors.message[0]}</p>}
            </div>

            <AnimatedButton type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {t.contact.form.sending}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  {t.contact.form.submit}
                </>
              )}
            </AnimatedButton>
          </form>
        </FadeIn>
      </div>
    </div>
  )
}
