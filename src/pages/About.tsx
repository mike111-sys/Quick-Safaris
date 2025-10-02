const About = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="mt-4 text-gray-600 max-w-3xl">
            Quickpulse Safaris & Travel is a premier tours and travel company offering unforgettable safaris and leisure getaways across Africa. We specialize in wildlife safaris, cultural tours, adventure expeditions, and beach escapes — all designed to give our clients authentic, memorable, and seamless experiences.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <div>
              <div className="font-semibold">Our Mission</div>
              <p className="mt-2 text-gray-600">To deliver unforgettable safari and travel experiences that inspire adventure, promote conservation, and leave a lasting positive impact on local communities.</p>
            </div>
            <div>
              <div className="font-semibold">Our Promise</div>
              <p className="mt-2 text-gray-600">Travel shaped around you: from handpicked lodges to expert guides and seamless logistics.</p>
            </div>
          </div>
          <div className="mt-8">
            <div className="font-semibold">Why Travel With Us?</div>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600">
              <li>Tailor-Made Experiences — your pace, your style, your budget</li>
              <li>Expert Guides — local knowledge, safety-first, conservation-minded</li>
              <li>Eco-Friendly Tourism — supporting wildlife and communities</li>
              <li>Seamless Travel — we handle the details end-to-end</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img className="rounded-lg h-48 sm:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1600&auto=format&fit=crop" alt="Safari" />
          <img className="rounded-lg h-48 sm:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1600&auto=format&fit=crop" alt="Beach" />
          <img className="rounded-lg h-48 sm:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" alt="Elephants" />
          <img className="rounded-lg h-48 sm:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1543248939-ff40856f65d4?q=80&w=1600&auto=format&fit=crop" alt="Jeep" />
        </div>
      </div>
    </section>
  )
}

export default About


