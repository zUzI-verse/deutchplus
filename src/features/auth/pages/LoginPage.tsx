import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { supabase } from "@/services/supabase/supabaseClient"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault()

    setLoading(true)
    setError("")

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md border rounded-2xl p-8 bg-white"
      >

        <h1 className="text-3xl font-bold text-brand-black">
          Login
        </h1>

        <p className="text-gray-500 mt-2">
          Access your student dashboard
        </p>

        <div className="mt-6 space-y-5">

          <div>
            <Input
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          <div>
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}

          <Button
            type="submit"
            className="w-full bg-brand-red"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </Button>

        </div>

      </form>
    </div>
  )
}