
import HomePage from "@/features/home/HomePage"
import LearnGerman from "@/app/routes/LearnGerman"
import { Routes, Route } from "react-router-dom"
import MainLayout from "@/app/layouts/MainLayout"
import Enroll from "./app/routes/Enroll"
import Booking from "./app/routes/Booking"
import ProtectedRoute from "./features/auth/components/ProtectedRoute"

const App = () => {
  return ( 
  <Routes>
    <Route  element={<MainLayout/>}>
     <Route path="/" element={<HomePage />} />
     <Route path="/learn-german" element={<LearnGerman/>}/>
     <Route path="/enroll" element={<Enroll />} />
     <Route path="/booking" element={<Booking />} />
    </Route>
    <Route path="/dashboard" element={<ProtectedRoute>
 <StudentDashboard />
   </ProtectedRoute>
 }
/>
  </Routes>
  )
}

export default App;