import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"



const enrollmentSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Invalid phone number"),
  country: z.string().min(2, "Country is required"),
})

type FormData = z.infer<typeof enrollmentSchema>

export default function EnrollmentForm({ level, onSubmit }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(enrollmentSchema),
  })

  const submitHandler = (data: FormData) => {
    console.log("Enrollment Data:", { ...data, level })

   onSubmit()
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-5 mt-8 max-w-xl">

      <div>
        <p className="text-sm text-gray-500">Selected Level</p>
        <h3 className="font-semibold text-brand-black">{level}</h3>
      </div>

      <div>
        <Input placeholder="Full Name" {...register("name")} />
        <p className="text-sm text-red-500">{errors.name?.message}</p>
      </div>

      <div>
        <Input placeholder="Email Address" {...register("email")} />
        <p className="text-sm text-red-500">{errors.email?.message}</p>
      </div>

      <div>
        <Input placeholder="Phone Number" {...register("phone")} />
        <p className="text-sm text-red-500">{errors.phone?.message}</p>
      </div>

      <div>
        <Input placeholder="Country" {...register("country")} />
        <p className="text-sm text-red-500">{errors.country?.message}</p>
      </div>

      <Button type="submit" className="w-full bg-brand-red">
        Complete Enrollment
      </Button>
    </form>
  )
}