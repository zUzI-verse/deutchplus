import {Card, CardContent } from "@/components/ui/card"
import type { TestimonialType } from "@/lib/types/types"

    const testimonials: TestimonialType[] = [
    {
      name: "Samuel O.",
      role: "A2 German Student",
      message:
        "The classes helped me pass my Goethe A2 exam on the first attempt. The explanations were clear and practical.",
    },
    {
      name: "Chioma N.",
      role: "Ausbildung Applicant",
      message:
        "I received guidance for my Ausbildung application and interview preparation. I now have a placement in Germany.",
    },
    {
      name: "David K.",
      role: "B1 German Student",
      message:
        "Learning German here was structured and motivating. The online classes were flexible and easy to follow.",
    },
  ]
const TestimonialsSection = () => {

  return (
     <section className="bg-brand-light py-15">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-black">
            What Our Students Say
          </h2>

          <p className="mt-4 text-gray-600">
            Students across different countries have successfully prepared
            for German exams and Ausbildung opportunities through our classes.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition">

              <CardContent className="p-6">

                <p className="text-gray-600">
                  "{testimonial.message}"
                </p>

                <div className="mt-6">

                  <p className="font-semibold">
                    {testimonial.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>

                </div>

              </CardContent>

            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection