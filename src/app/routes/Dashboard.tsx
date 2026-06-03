import StudentDashboard from "@/features/dashboard/component/StudentDashboard"
import TeacherDashboard from "@/features/dashboard/component/TeacherDashboard"

export default function Dashboard() {
  StudentDashboard()
  TeacherDashboard()
  return <div>Dashboard</div>
}
  // This component is just a placeholder to demonstrate routing.
  // In a real app, you'd likely have logic here to determine
  // which dashboard to show based on the user's role.