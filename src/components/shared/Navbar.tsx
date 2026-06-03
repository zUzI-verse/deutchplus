import { Link } from "react-router-dom";
import logo from "@/assets/DeutschPlus-Logo2-04.svg";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type NavbarProps = {
  profile?: {
    role?: "student" | "teacher" | string;
  };
};

const Navbar = ({ profile }: NavbarProps) => {
  return (
    <header className="border-b bg-white h-25">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className=" flex">
          <Link to="/">
            <img src={logo} alt="Deutsch Platform Logo" className="h-15 w-20" />
          </Link>

          <div className="font-semibold font-secondary text-xl flex flex-col">
            <div>
              <span className=" text-brand-black">Deutsch</span>
              <span className=" text-brand-red">Plus</span>
            </div>
            <div>
              <span className=" text-brand-yellow">Sprachschule</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className=" hover:text-brand-yellow transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-brand-yellow transition">
            About Us
          </Link>

          <Link to="/classes" className="hover:text-brand-yellow transition">
            Classes
          </Link>

          {profile?.role === "student" && (
            <Link to="/dashboard">Dashboard</Link>
          )}

          {profile?.role === "teacher" && (
            <Link to="/teacher-dashboard">Teacher Dashboard</Link>
          )}

          {/* Secondary Action */}
          <Link to="/booking" className="hover:text-brand-red transition">
            Book Consultation
          </Link>
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:block">
          <Button className="bg-brand-red text-white hover:bg-brand-red/90 hover:shadow-lg transition px-7 py-6 hover:cursor-pointer">
            <Link to="/enroll">Enroll Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu size={28} />
            </SheetTrigger>

            <SheetContent className="p-6 bg-brand-gray space-y-6 slide-in-from-left-translate-full">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/classes">Classes</Link>
              <Link to="/booking">Book Consultation</Link>

              <Button className="w-full bg-brand-red text-white  hover:bg-brand-red/90 hover:shadow-lg transition px-6 py-5 ">
                <Link to="/enroll">Enroll Now</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
