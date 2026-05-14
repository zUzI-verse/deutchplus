import { BookOpen, MessageCircle, BadgeCheck, Briefcase, } from "lucide-react"


const levels = [
    {
        level: "A1",
        title: "Beginner",
        description: "Learn everyday German for greetings, introductions, simple conversations, and daily needs.",
        icon: BookOpen,
    },
    {
        level: "A2",
        title: "Elementary",
        description: "Build confidence with common expressions, short conversations, and practical communication.",
        icon: MessageCircle,
    },
    {
        level: "B1",
        title: "Intermediate",
        description: "Understand familiar topics, express opinions, and communicate more independently in German.",
        icon: BadgeCheck,
    },
    {
        level: "B2",
        title: "Advanced",
        description: "Strengthen fluency, handle complex discussions, and prepare for advanced study or career paths.",
        icon: Briefcase,
    }
    
];

const RoadmapSection = () => {
    const outcomes = [
  {
    title: "Pass Goethe Exams",
    description: "Prepare confidently for A1–B2 Goethe certification exams.",
  },
  {
    title: "Ausbildung Readiness",
    description: "Gain the language skills required for vocational training in Germany.",
  },
  {
    title: "Study in Germany",
    description: "Meet language requirements for university admission in Europe.",
  },
  {
    title: "Career Opportunities",
    description: "Communicate effectively in professional and work environments.",
  },
]
  return (
    <section className="py-20 bg-white ">
        <div className="max-w-7xl mx-auto px-6 py-6 border border-brand-gray w-full  rounded-lg">
            <div className=" mx-auto max-w-2xl text-center ">
                <p className="text-md font-semibold tracking-wide text-brand-red uppercase"> Learning Journey</p>
                <p className="mt-3 text-3xl font-bold text-brand-black md:text-4xl"> Follow a Clear German Learning Path</p>
                <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">Progress step by step from beginner to confident communicator with a structured roadmap designed around real student growth.</p>
            </div>

            <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                {levels.map((item) => 
                          
                 (                  
            <div
              key={item.level}
              className="relative rounded-2xl border border-brand-gray bg-brand-light p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-lg font-bold text-white">
                  {item.level}
                </span>


                <span className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-red shadow-sm">           
                      {<item.icon size={24} />}
                  </span>
                {/* <span className="text-md font-bold text-amber-400">
                  0{index + 1}
                </span> */}
              </div>

       

              <h3 className="mt-6 text-xl font-semibold text-brand-black">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {item.description}
              </p>

              {/* {index < levels.length -1 && (
                <div className="absolute -right-4 top-1/2 hidden xl:block h-0.5 w-4 -translate-y-1/2 bg-brand-yellow" />
              )} */}
            </div>
          ))}
        </div>

        <div className="mt-16 relative bg-[url('assets/students.jpg')] bg-cover bg-center rounded-3xl ">
          <div className=" rounded-3xl bg-black/65 px-6 py-12 md:px-12">

            {/* Title */}
            <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
                Where This Journey Leads You
            </h3>

            <p className="mt-4 font-bold text-gray-300">
                By progressing through our structured German levels, you unlock real opportunities
                for study, training, and career growth in Europe.
            </p>
            </div>

            {/* Outcomes Grid */}
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {outcomes.map((item, index) => (
                <div
                key={index}
                className="rounded-xl bg-brand-light/15 p-5 text-center transition"
                >
                <h4 className="font-semibold text-amber-400 text-lg">
                    {item.title}
                </h4>

              <p className="mt-2 text-sm  text-brand-light font-semibold">
                  {item.description}
              </p>
                </div>
            ))}
            </div>
          </div>
        </div>

            <div className="mt-10 text-center">
            <p className="text-lg text-gray-600">
                Not sure where to start? We can help you find your current level.
            </p>
            <button className="mt-4 rounded-xl bg-brand-black px-6 py-3 font-semibold text-white transition hover:bg-brand-red">
                Book a Level Assessment
            </button>
            </div>
        </div>
    </section>
    
  )
}

export default RoadmapSection;