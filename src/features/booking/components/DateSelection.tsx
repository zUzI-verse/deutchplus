

// (Simple version for now)
const DateSelection = ({ onSelect }: any) => {
const dates = ["Mon", "Tue", "Wed", "Thu", "Fri"]

  return (
     <div className="flex gap-4 flex-wrap mt-6">
      {dates.map((day) => (
        <button
          key={day}
          onClick={() => onSelect(day)}
          className="px-5 py-3 border rounded-lg hover:bg-brand-light"
        >
          {day}
        </button>
      ))}
    </div>
  )
}

export default DateSelection