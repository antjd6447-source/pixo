export default function Home() {
  const profiles = [
    "/dlalwl1.png",
    "/dlalwl2.png",
    "/dlalwl3.png",
    "/dlalwl4.png",
  ];

  const categories = [
    {
      title: "Species",
      image: "/dlalwl1.png",
    },
    {
      title: "Themes",
      image: "/dlalwl2.png",
    },
    {
      title: "Professions",
      image: "/dlalwl3.png",
    },
    {
      title: "Styles",
      image: "/dlalwl4.png",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">
            PIXO
          </h1>

          <button className="border px-4 py-2 rounded-xl hover:bg-black hover:text-white transition">
            Login
          </button>
        </div>
      </header>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <input
          type="text"
          placeholder="Search Profiles..."
          className="w-full border rounded-2xl px-5 py-4 text-lg"
        />

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="border rounded-full px-3 py-1">
            Fox Girl
          </span>

          <span className="border rounded-full px-3 py-1">
            Dark Elf
          </span>

          <span className="border rounded-full px-3 py-1">
            White Hair Knight
          </span>

          <span className="border rounded-full px-3 py-1">
            Angel Healer
          </span>
        </div>
      </section>

      {/* Today's Picks */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">
          Today's Picks
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profiles.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl group cursor-pointer"
            >
              <img
                src={image}
                alt=""
                className="w-full h-80 object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Explore */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold mb-6">
          Explore
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden cursor-pointer group"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-56 object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 flex items-end">
                <h3 className="text-white font-bold text-xl p-4">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="max-w-7xl mx-auto px-6 mt-12 pb-20">
        <h2 className="text-2xl font-bold mb-6">
          Trending Profiles
        </h2>

        <div className="columns-2 md:columns-4 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid overflow-hidden rounded-3xl"
            >
              <img
                src={profiles[index % 4]}
                alt=""
                className="w-full hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}