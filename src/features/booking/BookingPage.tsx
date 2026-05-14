import { useState } from "react"
import ServiceSelection from "./components/ServiceSelection"
import DateSelection from "./components/DateSelection"
import TimeSelection from "./components/TimeSelection"
import BookingForm from "./components/BookingForm"
import BookingSuccess from "./components/BookingSuccess"



const BookingPage = () => {
 const [service, setService] = useState<string | null>(null)
  const [date, setDate] = useState<string | null>(null)
  const [time, setTime] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

     if (submitted) return <BookingSuccess />
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold text-center text-brand-black">
        Book a Session
      </h1>

      {!service && (
        <div className="mt-10">
          <ServiceSelection onSelect={setService} />
        </div>
      )}

      {service && !date && (
        <DateSelection onSelect={setDate} />
      )}

      {date && !time && (
        <TimeSelection onSelect={setTime} />
      )}

      {time && (
        <BookingForm
          service={service}
          date={date}
          time={time}
          onSubmit={() => setSubmitted(true)}
        />
      )}

    </div>
  )
}

export default BookingPage