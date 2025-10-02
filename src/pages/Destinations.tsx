const Destinations = () => {
  const regions = [
    { title: 'Kenya', items: [
      { name: 'Masai Mara', img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1600&auto=format&fit=crop' },
      { name: 'Amboseli', img: 'https://images.unsplash.com/photo-1544986581-efac024faf62?q=80&w=1600&auto=format&fit=crop' },
      { name: 'Samburu', img: 'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?q=80&w=1600&auto=format&fit=crop' },
      { name: 'Tsavo', img: 'https://images.unsplash.com/photo-1519669011783-4eaa95fa0ed2?q=80&w=1600&auto=format&fit=crop' },
      { name: 'Diani Beach', img: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1600&auto=format&fit=crop' },
    ]},
    { title: 'Tanzania', items: [
      { name: 'Serengeti', img: 'https://images.unsplash.com/photo-1581873372796-c0940a8f65b0?q=80&w=1600&auto=format&fit=crop' },
      { name: 'Ngorongoro Crater', img: 'https://images.unsplash.com/photo-1567517368672-05b1b9c2a1e7?q=80&w=1600&auto=format&fit=crop' },
      { name: 'Zanzibar', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop' },
    ]},
    { title: 'Uganda & Rwanda', items: [
      { name: 'Gorilla trekking', img: 'https://images.unsplash.com/photo-1558980664-10a5b5b1a26b?q=80&w=1600&auto=format&fit=crop' },
      { name: 'Cultural tours', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop' },
    ]},
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Top Destinations</h1>
      <p className="mt-3 text-gray-600">Iconic reserves, volcanic craters, emerald forests, and coral-fringed coasts—pick your rhythm.</p>
      <div className="mt-6 space-y-8">
        {regions.map((region) => (
          <div key={region.title}>
            <div className="font-semibold text-lg">{region.title}</div>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-3">
              {region.items.map((i) => (
                <div key={i.name} className="rounded-lg overflow-hidden border bg-white">
                  <div className="aspect-square">
                    <img className="w-full h-full object-cover" src={i.img} alt={i.name} />
                  </div>
                  <div className="px-3 py-2 text-sm">{i.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Destinations


