const Contact = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-4 text-gray-600">Let’s plan your dream trip today. Share your preferences and we’ll tailor an unforgettable journey from the first call to your final sunset.</p>
          <div className="mt-6 space-y-3 text-gray-700">
            <div><span className="font-semibold">Email:</span> info@quickpulse.africa</div>
            <div><span className="font-semibold">Phone:</span> +254 700 000 000</div>
            <div><span className="font-semibold">Location:</span> Nairobi, Kenya</div>
            <div className="text-sm text-gray-500">Business hours: Mon–Sat, 8:30am–6:00pm EAT</div>
          </div>
          <div className="mt-6">
            <div className="text-sm text-gray-500">Prefer WhatsApp? Start a chat and we’ll respond quickly.</div>
            <a href="#" className="inline-block mt-2 px-4 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-700">Chat on WhatsApp</a>
          </div>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border rounded px-3 py-2" placeholder="Full Name" />
          <input className="border rounded px-3 py-2" placeholder="Email" type="email" />
          <input className="border rounded px-3 py-2" placeholder="Phone" />
          <input className="border rounded px-3 py-2" placeholder="Preferred Dates" />
          <input className="border rounded px-3 py-2 md:col-span-2" placeholder="Destination(s)" />
          <textarea className="border rounded px-3 py-2 md:col-span-2" placeholder="Tell us about your dream safari" rows={6} />
          <button className="md:col-span-2 inline-flex justify-center items-center px-4 py-2 rounded bg-emerald-600 text-white font-medium hover:bg-emerald-700">Send Inquiry</button>
        </form>
      </div>
    </section>
  )
}

export default Contact


