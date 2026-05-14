import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "German Language Tutorials",
    description: "Intensive German classes for A1, A2, B1 and B2 levels."
  },
  {
    title: "Ausbildung Applications",
    description: "Guidance and application support for vocational training in Germany."
  },
  {
    title: "Interview Preparation",
    description: "Prepare for embassy and Ausbildung interviews with confidence."
  },
  {
    title: "Student Admission",
    description: "Application assistance for universities across Europe."
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-black">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition">

              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {service.description}
                </p>
              </CardContent>

            </Card>
          ))}

        </div>

      </div>
    </section>
  )
}