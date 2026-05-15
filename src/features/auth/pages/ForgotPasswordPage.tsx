import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { supabase } from "@/services/supabase/supabaseClient"

export default function ForgotPasswordPage() {

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  async function handleReset() {

    await supabase.auth.resetPasswordForEmail(
      email,
      {
        redirectTo:
          "http://localhost:5173/reset-password",
      }
    )

    setMessage(
      "Password reset email sent."
    )
  }

  return (
    <div className="max-w-md mx-auto py-20 px-6">

      <h1 className="text-2xl font-bold">
        Forgot Password
      </h1>

      <Input
        className="mt-6"
        placeholder="Email Address"
        value={email}
        onChange={(e)=>
          setEmail(e.target.value)
        }
      />

      <Button
        onClick={handleReset}
        className="mt-4 w-full bg-brand-red"
      >
        Send Reset Link
      </Button>

      {message && (
        <p className="mt-4 text-green-600">
          {message}
        </p>
      )}

    </div>
  )
}