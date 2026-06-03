import { useAuth } from
"@/features/auth/context/AuthContext"

import { Button } from "@/components/ui/button"

export default function TeacherDashboard() {

  const { profile } = useAuth()

  return (
    <div className="min-h-screen bg-brand-light">

      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen p-6">

          <h2 className="text-xl font-bold">
            Teacher Panel
          </h2>

          <nav className="mt-10 space-y-4">

            <a href="#">
              Dashboard
            </a>

            <a href="#">
              Classes
            </a>

            <a href="#">
              Students
            </a>

            <a href="#">
              Announcements
            </a>

          </nav>

        </aside>

        {/* Main */}
        <main className="flex-1 p-10">

          <div className="flex justify-between items-center">

            <div>
              <h1 className="text-3xl font-bold">
                Welcome,
                {" "}
                {profile?.full_name}
              </h1>

              <p className="text-gray-500 mt-2">
                Manage your classes and students
              </p>
            </div>

            <Button className="bg-brand-red">
              Create Class
            </Button>

          </div>

          {/* Stats */}
          <div className="grid gap-6 md:grid-cols-3 mt-10">

            <div className="bg-white p-6 rounded-2xl border">
              Assigned Students
            </div>

            <div className="bg-white p-6 rounded-2xl border">
              Upcoming Classes
            </div>

            <div className="bg-white p-6 rounded-2xl border">
              Announcements
            </div>

          </div>

        </main>

      </div>

    </div>
  )
}