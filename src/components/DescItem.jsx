const DescItem = ({ title, icon, sub }) => {
  return (
    <div className="grid gap-4 bg-gray-100 rounded-md px-5 py-10 h-96 mx-3">
      <div className="justify-self-center bg-gray-50 rounded-full text-neutral">{icon}</div>
      <div className="font-bold text-xl">{title}</div>
      <div className="pb-5">{sub}</div>
    </div>
  )
}

export default DescItem