
const levels = [
  { level: "A1", title: "Beginner" },
  { level: "A2", title: "Elementary" },
  { level: "B1", title: "Intermediate" },
  { level: "B2", title: "Advanced" },
]

const LevelSelection = ( {onSelect}:any) => {
  return (
    <div>
        {levels.map((item) => (
         <button key={item.level}  
          className="rounded-2xl border border-brand-gray p-6 text-left hover:border-brand-red transition"
          onClick={() => onSelect(item.level)}
         >
           <h3 className="text-xl font-semibold text-brand-black">
            {item.level}
          </h3>
          <p className="text-gray-600 mt-2">{item.title}</p>
         </button>
        ))}
    </div>
  )
}

export default LevelSelection;