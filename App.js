import React from "react";

export default function App() {
  return (
    <div className="min-h-screen text-gray-900">
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-600">TRIOMAH <span className="text-black">SPARES LTD</span></div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617350629391-2a9d7f8e2f0c?auto=format&fit=crop&w=1470&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">EXPORTING QUALITY AUTO PARTS WORLDWIDE</h1>
          <p className="text-lg mb-6">Sourcing Quality Auto Parts, Exported with Precision</p>
          <button className="bg-red-600 px-6 py-2 rounded hover:bg-red-700">Browse Parts</button>
        </div>
      </section>

      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-5xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold mb-2">Dismantling</h3>
            <p>Sourcing quality auto parts. Exported with precision.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">🚙</div>
            <h3 className="text-xl font-semibold mb-2">Spare Parts</h3>
            <p>Reliable used auto parts from trusted sources.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">🚛</div>
            <h3 className="text-xl font-semibold mb-2">Export</h3>
            <p>We deliver globally with logistics you can trust.</p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-10 px-4">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="mb-2">Email: <a href="mailto:info@triomahspares.co.uk" className="underline">info@triomahspares.co.uk</a></p>
        <p>Phone: +44 1234 567690</p>
      </footer>
    </div>
  );
}
