const Experiences = () => {
  const experiences = [
    { title: 'Classic Safari Adventure (5 Days)', desc: 'Masai Mara, Lake Nakuru, Naivasha' },
    { title: 'Wilderness & Culture (7 Days)', desc: 'Samburu, Laikipia, Aberdares' },
    { title: 'Safari & Beach Escape (10 Days)', desc: 'Amboseli, Tsavo, Zanzibar' },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Sample Experiences</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((e) => (
          <div key={e.title} className="border rounded-lg p-6">
            <div className="font-semibold">{e.title}</div>
            <p className="text-gray-600 mt-2">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experiences


