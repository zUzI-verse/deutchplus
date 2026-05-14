import {Outlet} from "react-router-dom"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <header><Navbar /></header>
      <main>
         <Outlet /> {/*  // This is where the child routes will be rendered */}
      </main>
      <footer><Footer /></footer>
    </div>
  )
}

export default MainLayout;