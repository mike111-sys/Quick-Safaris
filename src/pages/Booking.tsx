import { useState } from 'react'

type FormData = {
  name: string
  email: string
  phone: string
  adults: number
  children: number
  dates: string
  destination: string
  message: string
}

const Booking = () => {
  const [data, setData] = useState<FormData>({
    name: '', email: '', phone: '', adults: 2, children: 0, dates: '', destination: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof FormData, value: string | number) => setData({ ...data, [field]: value })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Request a Custom Quote</h1>
      <p className="mt-3 text-gray-600">Tell us your dream safari. We’ll craft a personalized itinerary and send a quote within 24–48 hours.</p>

      {submitted ? (
        <div className="mt-6 rounded border p-6 bg-emerald-50 text-emerald-800">Thank you! Our travel specialist will contact you shortly.</div>
      ) : (
        <form onSubmit={submit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border rounded px-3 py-2" placeholder="Full Name" value={data.name} onChange={(e) => update('name', e.target.value)} required />
          <input className="border rounded px-3 py-2" placeholder="Email" type="email" value={data.email} onChange={(e) => update('email', e.target.value)} required />
          <input className="border rounded px-3 py-2" placeholder="Phone" value={data.phone} onChange={(e) => update('phone', e.target.value)} />
          <input className="border rounded px-3 py-2" placeholder="Preferred Dates" value={data.dates} onChange={(e) => update('dates', e.target.value)} />
          <input className="border rounded px-3 py-2" placeholder="Destination(s)" value={data.destination} onChange={(e) => update('destination', e.target.value)} />
          <div className="grid grid-cols-2 gap-4">
            <input className="border rounded px-3 py-2" placeholder="Adults" type="number" value={data.adults} onChange={(e) => update('adults', Number(e.target.value))} />
            <input className="border rounded px-3 py-2" placeholder="Children" type="number" value={data.children} onChange={(e) => update('children', Number(e.target.value))} />
          </div>
          <textarea className="md:col-span-2 border rounded px-3 py-2" rows={6} placeholder="Tell us about your ideal experience — pace, accommodation, must-see wildlife, budget range." value={data.message} onChange={(e) => update('message', e.target.value)} />
          <button className="md:col-span-2 inline-flex justify-center items-center px-4 py-2 rounded bg-emerald-600 text-white font-medium hover:bg-emerald-700">Get My Custom Itinerary</button>
        </form>
      )}
    </section>
  )
}

export default Booking


