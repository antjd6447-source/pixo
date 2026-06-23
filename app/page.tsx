import Link from "next/link";

export default function Home() {
  const profiles = [
    {
      slug: "fox-boy",
      image: "/dlalwl1.png",
      name: "Fox Boy",
      species: "Fox",
      likes: 124,
      views: "2.1K",
    },
    {
      slug: "forest-archer",
      image: "/dlalwl2.png",
      name: "Forest Archer",
      species: "Fox",
      likes: 98,
      views: "1.8K",
    },
    {
      slug: "young-explorer",
      image: "/dlalwl3.png",
      name: "Young Explorer",
      species: "Fox",
      likes: 201,
      views: "3.4K",
    },
    {
      slug: "adventure-kid",
      image: "/dlalwl4.png",
      name: "Adventure Kid",
      species: "Fox",
      likes: 156,
      views: "2.7K",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            PIXO
          </h1>

          <button className="border px-4 py-2 rounded-xl">
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
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-6">
          Today's Picks
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <Link
              key={profile.slug}
              href={`/profile/${profile.slug}`}
              className="rounded-3xl overflow-hidden border hover:shadow-xl transition"
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

                <p className="text-gray-500 text-sm">
                  {profile.species}
                </p>

                <div className="flex justify-between mt-3 text-sm">
                  <span>❤️ {profile.likes}</span>
                  <span>👁 {profile.views}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}