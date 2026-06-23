export default function Home() {
  const profiles = [
    {
      image: "/dlalwl1.png",
      name: "Fox Boy",
      species: "Fox",
      likes: 124,
      views: "2.1K",
    },
    {
      image: "/dlalwl2.png",
      name: "Forest Archer",
      species: "Fox",
      likes: 98,
      views: "1.8K",
    },
    {
      image: "/dlalwl3.png",
      name: "Young Explorer",
      species: "Fox",
      likes: 201,
      views: "3.4K",
    },
    {
      image: "/dlalwl4.png",
      name: "Adventure Kid",
      species: "Fox",
      likes: 156,
      views: "2.7K",
    },
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

      <section className="max-w-7xl mx-auto px-6 py-8">
        <input
          type="text"
          placeholder="Search Profiles..."
          className="w-full border rounded-2xl px-5 py-4 text-lg"
        />

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="border rounded-full px-3 py-1">Fox Girl</span>
          <span className="border rounded-full px-3 py-1">Dark Elf</span>
          <span className="border rounded-full px-3 py-1">White Hair Knight</span>
          <span className="border rounded-full px-3 py-1">Angel Healer</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">
          Today's Picks
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden border hover:shadow-xl transition cursor-pointer"
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg">
                  {profile.name}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Species: {profile.species}
                </p>

                <div className="flex justify-between mt-3 text-sm">
                  <span>❤️ {profile.likes}</span>
                  <span>👁 {profile.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold mb-6">
          Explore
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-56 object-cover"
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

      <section className="max-w-7xl mx-auto px-6 mt-12 pb-20">
        <h2 className="text-2xl font-bold mb-6">
          Trending Profiles
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden border"
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold">
                  {profile.name}
                </h3>

                <div className="flex justify-between mt-2 text-sm">
                  <span>❤️ {profile.likes}</span>
                  <span>👁 {profile.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}