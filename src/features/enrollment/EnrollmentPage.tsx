import { useState } from "react"
import LevelSelection from "./components/LevelSelection"
import EnrollmentForm from "./components/EnrollmentForm"
import EnrollmentSuccess from "./components/EnrollmentSuccess"
import EnrollmentConfirmModal from "./components/EnrollmentConfirmModal"
import PaymentStep from "./components/PaymentStep"

export default function EnrollmentPage() {
  const [level, setLevel] = useState<string | null>(null)

  const [step, setStep] = useState<
    "form" | "modal" | "payment" | "success"
  >("form")

  const [showModal, setShowModal] = useState(false)

  const handleFormSubmit = () => {
    setShowModal(true)
  }

  const handlePayNow = () => {
    setShowModal(false)
    setStep("payment")
  }

  const handlePayLater = () => {
    setShowModal(false)
    setStep("success")
  }

  if (step === "success") return <EnrollmentSuccess />

  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold text-center text-brand-black">
        Enroll in a German Course
      </h1>

      {!level && (
        <div className="mt-10">
          <LevelSelection onSelect={setLevel} />
        </div>
      )}

      {level && step === "form" && (
        <EnrollmentForm
          level={level}
          onSubmit={handleFormSubmit}
        />
      )}

      {step === "payment" && (
        <PaymentStep level={level!}
      
        onPayLater={handlePayLater}
        />
      )}

      <EnrollmentConfirmModal
        open={showModal}
        onPayNow={handlePayNow}
        onPayLater={handlePayLater}
        onClose={() => setShowModal(false)}
      />

    </div>
  )
}