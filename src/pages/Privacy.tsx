const Privacy = () => {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-gray-600">We respect your privacy. This policy explains what data we collect, how we use it, and your choices.</p>
      <h2 className="mt-8 text-xl font-semibold">Information We Collect</h2>
      <p className="mt-2 text-gray-600">Contact details you provide (name, email, phone), trip preferences, and messages sent via our forms.</p>
      <h2 className="mt-6 text-xl font-semibold">How We Use Your Data</h2>
      <ul className="mt-2 list-disc pl-5 text-gray-600 space-y-1">
        <li>To plan and manage your travel arrangements</li>
        <li>To respond to inquiries and provide quotes</li>
        <li>To improve our services and website experience</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">Your Rights</h2>
      <p className="mt-2 text-gray-600">You may request access, correction, or deletion of your data. Contact us at info@quickpulse.africa.</p>
      <p className="mt-6 text-sm text-gray-500">Effective date: {new Date().toLocaleDateString()}</p>
    </section>
  )
}

export default Privacy


