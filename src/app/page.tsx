export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
        Find Your Next <span className="text-[#0070F3]">Property</span> with Confidence
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        Compare housing projects, review document statuses, and make informed decisions with transparent information.
      </p>
      <button className="bg-[#0A2540] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
        Browse Projects
      </button>
    </div>
  );
}