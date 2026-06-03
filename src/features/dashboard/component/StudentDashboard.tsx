import { useAuth } from "@/features/auth/context/AuthContext"
import { useEffect, useState } from "react"

import {
  getStudentClasses,
  getStudentEnrollments,
} from "../services/dashboardService"

export default function StudentDashboard() {
  const { profile } = useAuth()

  const [classes, setClasses] =
    useState<any[]>([])

  const [enrollments, setEnrollments] =
    useState<any[]>([])

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    async function loadData() {
      if (!profile?.id) return

      try {
        const classData =
          await getStudentClasses(
            profile.id
          )

        const enrollmentData =
          await getStudentEnrollments(
            profile.id
          )

        setClasses(classData)
        setEnrollments(enrollmentData)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [profile])

  if (loading) {
    return (
      <div className="p-10">
        Loading dashboard...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brand-light">
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen p-6">
          <h2 className="text-xl font-bold">
            DeutschPlus
          </h2>

          <nav className="mt-10 space-y-4">
            <a href="#">Dashboard</a>
            <a href="#">Classes</a>
            <a href="#">Payments</a>
            <a href="#">Profile</a>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-10">

          <h1 className="text-3xl font-bold">
            Welcome, {profile?.full_name}
          </h1>

          {/* Stats */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div className="bg-white p-6 rounded-2xl border">
              <h3 className="font-semibold">
                Upcoming Classes
              </h3>

              <p className="text-3xl mt-2">
                {classes.length}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border">
              <h3 className="font-semibold">
                Enrollment Status
              </h3>

              <p className="text-3xl mt-2">
                {enrollments.length}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border">
              <h3 className="font-semibold">
                Payment Status
              </h3>

              <p className="text-sm mt-2">
                Active
              </p>
            </div>

          </div>

          {/* REAL CLASSES */}
          <div className="mt-12">

            <h2 className="text-2xl font-bold mb-6">
              Your Classes
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              {classes.length > 0 ? (
                classes.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-6 rounded-2xl border"
                  >
                    <h3 className="font-semibold">
                      {item.classes.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                      {item.classes.level}
                    </p>
                  </div>
                ))
              ) : (
                <p>
                  No enrolled classes yet
                </p>
              )}

            </div>

          </div>

        </main>
      </div>
    </div>
  )
}