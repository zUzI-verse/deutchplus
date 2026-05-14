const services = [
  {
    title: "Free Consultation",
    description: "Discuss your goals and learning path.",
  },
  {
    title: "Level Assessment",
    description: "Determine your current German level.",
  },
  {
    title: "Interview Preparation",
    description: "Prepare for Ausbildung or embassy interviews.",
  },
]


const ServiceSelection = ({onSelect}:any) => {
  return (
     <div className="grid gap-6 md:grid-cols-3">
      {services.map((service) => (
        <button
          key={service.title}
          onClick={() => onSelect(service.title)}
          className="p-6 border border-brand-gray rounded-2xl text-left hover:border-brand-red transition"
        >
          <h3 className="font-semibold text-brand-black">
            {service.title}
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            {service.description}
          </p>
        </button>
      ))}
    </div>
  )
}

export default ServiceSelection