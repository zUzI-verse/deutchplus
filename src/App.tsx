
import HomePage from "@/features/home/HomePage"
import LearnGerman from "@/app/routes/Dashboard"
import { Routes, Route } from "react-router-dom"
import MainLayout from "@/app/layouts/MainLayout"
import Enroll from "./app/routes/Enroll"
import Booking from "./app/routes/Booking"
import StudentDashboard from "./features/dashboard/component/StudentDashboard"
import ProtectedRoute from "./features/auth/components/ProtectedRoute"
import RoleProtectedRoute from "./features/auth/components/RoleProtectedRoute"
import TeacherDashboard from "./features/dashboard/component/TeacherDashboard"
import LoginPage from "./features/auth/pages/LoginPage"
const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn-german" element={<LearnGerman/>}/>
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/booking" element={<Booking />} />
      </Route>
      <Route path="/dashboard"element={<ProtectedRoute>
         <StudentDashboard /> </ProtectedRoute> }
      />
      <Route path="/teacher-dashboard" element={ <ProtectedRoute>
            <RoleProtectedRoute allowedRole="teacher">
              <TeacherDashboard />
            </RoleProtectedRoute>
          </ProtectedRoute>  }
      />
      <Route path="/login"  element={<LoginPage />}/>

      
    </Routes>
  )
}

export default App;