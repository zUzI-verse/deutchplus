import {  createContext, useContext, useEffect, useState } from "react"
import { supabase } from "@/services/supabase/supabaseClient"

type AuthContextType = {
  user: any
  profile: any
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children,}: { children: React.ReactNode}) 
{
  const [user, setUser] = useState<any>(null)

  const [profile, setProfile] = useState<any>(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getUser() {
      setLoading(true)

      const {
        data: { session },
      } = await supabase.auth.getSession()

      const currentUser = session?.user ?? null

      setUser(currentUser)

      // FETCH PROFILE
      if (currentUser) {
        const { data, error } =
          await supabase
            .from("profiles")
            .select("*")
            .eq("id", currentUser.id)
            .single()

        if (error) {
          console.error(
            "Profile fetch error:",
            error.message
          )
        }

        setProfile(data)
      } else {
        setProfile(null)
      }

      setLoading(false)
    }

    getUser()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const currentUser =
          session?.user ?? null

        setUser(currentUser)

        // FETCH PROFILE AGAIN
        if (currentUser) {
          const { data } =
            await supabase
              .from("profiles")
              .select("*")
              .eq("id", currentUser.id)
              .single()

          setProfile(data)
        } else {
          setProfile(null)
        }
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  async function signOut() {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    )
  }

  return context
}