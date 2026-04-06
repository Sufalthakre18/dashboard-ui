
function StatCard({title,value,icon}) {
  return (
    <div className="bg-stone-50 border rounded-xl p-4 shadow-sm flex items-center gap-4">
        <div className="text-3xl font-light">
            {icon}
        </div>
        <div className="">
            <p className="text-sm text-gray-500">{title}</p>
            <h2 className="text-4xl">{value}</h2>
        </div>
    </div>
  )
}

export default StatCard