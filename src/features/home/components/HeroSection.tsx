import Image3 from "@/assets/Image3.jpg"
import { Link } from "react-router-dom"


const HeroSection = () => {
  return (
     <section className="bg-brand-light py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight">
            Learn German the Smart Way
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Intensive German tutorials and Goethe exam preparation
            for A1, A2, B1 & B2 levels. Learn from the comfort of your home.
          </p>

          <div className="mt-8 flex gap-4">
        
        <Link to ="/enroll">
          <button className="bg-brand-red text-white px-6 py-3 rounded-lg hover:bg-brand-red/90 hover:shadow-lg transition">
                Start Learning
          </button>
        </Link>


        <Link to="/booking">
        <button className="border border-gray-300 px-6 py-3 rounded-lg hover:border-brand-yellow hover:shadow-lg transition">
                Book Consultation
          </button>
        </Link>
        
      
          
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src={Image3}
            alt="German students"
            className="rounded-xl"
          />
        </div>

      </div>
    </section>
  )
}

export default HeroSection;