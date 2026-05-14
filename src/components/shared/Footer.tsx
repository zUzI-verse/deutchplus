import { Link } from "react-router-dom"
import logo from "@/assets/DeutschPlus Logo-01.svg"


const Footer = () => {
  return (
   <footer className="bg-brand-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
        <div className=" flex">
          <img src={logo} alt="Deutsch Platform Logo" className="h-15 w-20" />
          <div className="font-semibold font-secondary text-xl flex flex-col" >
             <div>
                  <span className=" text-brand-light">
                    Deutsch
                  </span>
                  <span className=" text-brand-red">
                    Plus
                  </span>
              </div> 
              <div>
                  <span className=" text-brand-yellow">
                   Sprachschule
                  </span>
              </div>
          </div >
        </div>
          <p className="mt-4 text-sm text-gray-400">
           Learn German with a structured path
            from A1 to B2 and unlock opportunities in Europe.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-brand-yellow">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-400">
            <li className="hover:text-white transition"><Link to="/">Home</Link></li>
            <li className="hover:text-white transition"><Link to="/learn-german">Learn German</Link></li>
            <li className="hover:text-white transition"><Link to="/ausbildung">Ausbildung</Link></li>
            <li className="hover:text-white transition"><Link to="/enroll">Enroll Now</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="font-semibold text-brand-yellow">Programs</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li className="hover:text-white transition">A1 Beginner</li>
            <li className="hover:text-white transition">A2 Elementary</li>
            <li className="hover:text-white transition">B1 Intermediate</li>
            <li className="hover:text-white transition">B2 Upper Intermediate</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-brand-yellow">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li className="hover:text-white transition">Online (Zoom)</li>
            <li className="hover:text-white transition">+234 903 213 2027</li>
            <li className="hover:text-white transition">deutschplusschule@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>© {new Date().getFullYear()} DeutschPlus. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/booking" className="hover:text-white">
              Book Consultation
            </Link>

            <Link to="/enroll" className="text-brand-yellow hover:text-white">
              Enroll Now
            </Link>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer