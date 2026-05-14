import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

type Props = {
  open: boolean
  onPayNow: () => void
  onPayLater: () => void
  onClose: () => void
} 

const EnrollmentConfirmModal = ({
  open,
  onPayNow,
  onPayLater,
  onClose,
}: Props) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">

        <DialogHeader>
          <DialogTitle className="text-xl">
            Confirm Enrollment
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-gray-600 mt-2">
          Enrollment does not guarantee a spot in the program.
          To secure your slot, you can proceed with payment now.
        </p>

        <div className="flex flex-col gap-3 mt-6">

          <Button
            onClick={onPayNow}
            className="bg-brand-red w-full"
          >
            Pay Now
          </Button>

          <Button
            variant="outline"
            onClick={onPayLater}
            className="w-full"
          >
            Pay Later
          </Button>

        </div>

      </DialogContent>
    </Dialog>
  
  )
}

export default EnrollmentConfirmModal