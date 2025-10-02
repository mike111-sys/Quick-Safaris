const Terms = () => {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Terms & Conditions</h1>
      <p className="mt-4 text-gray-600">Please read these terms carefully before booking. By confirming your trip, you agree to the following:</p>
      <h2 className="mt-8 text-xl font-semibold">Payments & Cancellations</h2>
      <ul className="mt-2 list-disc pl-5 text-gray-600 space-y-1">
        <li>Deposits are required to secure bookings; balances due before departure.</li>
        <li>Cancellation fees may apply according to supplier policies and dates.</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">Travel Documents</h2>
      <p className="mt-2 text-gray-600">You are responsible for valid passports, visas, vaccinations, and insurance relevant to your itinerary.</p>
      <h2 className="mt-6 text-xl font-semibold">Liability</h2>
      <p className="mt-2 text-gray-600">We act in good faith with partners but are not liable for events beyond our control such as weather, strikes, or force majeure.</p>
    </section>
  )
}

export default Terms


