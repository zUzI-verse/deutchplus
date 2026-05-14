import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
})

type FormData = z.infer<typeof bookingSchema>

export default function BookingForm({ service, date, time, onSubmit }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(bookingSchema),
  })

  const submitHandler = (data: FormData) => {
    console.log("Booking Data:", {
      ...data,
      service,
      date,
      time,
    })

    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="mt-8 max-w-xl space-y-5">

      <div className="text-sm text-gray-600">
        <p>Service: {service}</p>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
      </div>

      <div> 
        <Input placeholder="Full Name" {...register("name")} />
        <p className="text-sm text-red-500">{errors.name?.message}</p>
      </div>

      <div>
        <Input placeholder="Email Address" {...register("email")} />
        <p className="text-sm text-red-500">{errors.email?.message}</p>
      </div>

      <Button type="submit" className="w-full bg-brand-red">
        Confirm Booking
      </Button>
    </form>
  )
} 