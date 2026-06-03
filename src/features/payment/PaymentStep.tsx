import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Props = {
  level: string
  onPayLater: () => void // this will be used for both "I Have Made Payment" and "Pay Later Instead" actions for simplicity
}


const PaymentStep = ({ level,  onPayLater }: Props) => {
  const [receipt, setReceipt] = useState<File | null>(null)

  return (
    <div className="max-w-xl mx-auto mt-10">

      <h2 className="text-2xl font-semibold text-brand-black">
        Complete Payment
      </h2>

      <p className="text-gray-600 mt-2">
        You are enrolling for <strong>{level}</strong>
      </p>

      {/* Price Card */}
      <div className="mt-6 border rounded-xl p-6 bg-brand-light border-brand-red">
        <h3 className="font-semibold text-lg">
          Course Fee
        </h3>

        <p className="text-3xl font-bold mt-2 text-brand-black">
          ₦50,000
        </p>

        <p className="text-sm text-gray-500 mt-2">
          Transfer the amount to the account below
        </p>
      </div>

      {/* Bank Details */}
      <div className="mt-6 border rounded-xl p-6 bg-brand-light
border-brand-yellow">

        <h3 className="font-semibold">
          Bank Transfer Details
        </h3>

        <div className="mt-4 space-y-2 text-sm">

          <div className="flex justify-between">
            <span className="text-gray-500">Bank</span>
            <span className="font-medium">GTBank</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Account Name</span>
            <span className="font-medium">DeutschPlus Schule</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Account Number</span>
            <span className="font-medium">0123456789</span>
          </div>
           <button className="text-md font-medium hover:cursor-pointer transition  bg-brand-yellow text-black px-3 py-2 rounded-lg"
                onClick={() => navigator.clipboard.writeText("0123456789")}
                >
                Copy
              </button>
        </div>

      </div>

      {/* Upload Receipt */}
      <div className="mt-6">

        <label className="text-sm font-medium">
          Upload Payment Receipt
        </label>

        <Input
          type="file"
          className="mt-2"
          onChange={(e) =>
            setReceipt(e.target.files?.[0] || null)
          }
        />

        {receipt && (
          <p className="text-sm text-green-600 mt-2">
            Receipt uploaded: {receipt.name}
          </p>
        )}

      </div>

      {/* Actions */}
      <div className="mt-6 space-y-3">

        <Button
          className="w-full bg-brand-red"
          disabled={!receipt}
          onClick={onPayLater}
        >
          I Have Made Payment
        </Button>

        <Button variant="outline" className="w-full" onClick={onPayLater}>
          Pay Later Instead
        </Button>

      </div>

    </div>
  )
}

export default PaymentStep