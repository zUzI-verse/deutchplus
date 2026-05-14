

const TimeSelection = ({ onSelect }: any) => {
    const times = ["09:00", "11:00", "13:00", "15:00"]
  return (
      <div className="grid grid-cols-2 gap-4 mt-6">
      {times.map((time) => (
        <button
          key={time}
          onClick={() => onSelect(time)}
          className="p-3 border rounded-lg hover:bg-brand-light"
        >
          {time}
        </button>
      ))}
    </div>
  )
}

export default TimeSelection