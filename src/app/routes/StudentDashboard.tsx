import { useAuth } from
"@/features/auth/context/AuthContext"

export default function StudentDashboard(){

 const { profile } = useAuth()

 return (

  <div className="min-h-screen bg-brand-light">

   <div className="flex">

    {/* Sidebar */}
    <aside className="w-64 bg-white border-r min-h-screen p-6">

      <h2 className="text-xl font-bold">
        DeutschPlus
      </h2>

      <nav className="mt-10 space-y-4">

        <a href="#">
          Dashboard
        </a>

        <a href="#">
          Classes
        </a>

        <a href="#">
          Payments
        </a>

        <a href="#">
          Profile
        </a>

      </nav>

    </aside>

    {/* Main Content */}
    <main className="flex-1 p-10">

      <h1 className="text-3xl font-bold">

        Welcome,
        {" "}
        {profile?.full_name}

      </h1>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="bg-white p-6 rounded-2xl border">
          Upcoming Classes
        </div>

        <div className="bg-white p-6 rounded-2xl border">
          Enrollment Status
        </div>

        <div className="bg-white p-6 rounded-2xl border">
          Payment Status
        </div>

      </div>

    </main>

   </div>

  </div>
 )
}