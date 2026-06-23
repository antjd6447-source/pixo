"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const profiles = [
    {
      slug: "fox-boy",
      image: "/dlalwl1.png",
      name: "여우 소년",
      species: "여우",
      likes: 124,
      views: "2.1K",
      tags: ["여우", "소년", "판타지", "모험가"],
    },
    {
      slug: "forest-archer",
      image: "/dlalwl2.png",
      name: "숲의 궁수",
      species: "여우",
      likes: 98,
      views: "1.8K",
      tags: ["여우", "궁수", "숲", "판타지"],
    },
    {
      slug: "young-explorer",
      image: "/dlalwl3.png",
      name: "어린 탐험가",
      species: "여우",
      likes: 201,
      views: "3.4K",
      tags: ["탐험가", "소년", "판타지"],
    },
    {
      slug: "adventure-kid",
      image: "/dlalwl4.png",
      name: "어드벤처 키드",
      species: "여우",
      likes: 156,
      views: "2.7K",
      tags: ["모험가", "여우", "소년"],
    },
  ];

  const filteredProfiles = profiles.filter((profile) => {
    const keyword = search.toLowerCase();

    return (
      profile.name.toLowerCase().includes(keyword) ||
      profile.species.toLowerCase().includes(keyword) ||
      profile.tags.some((tag) =>
        tag.toLowerCase().includes(keyword)
      )
    );
  });

  return (
    <main className="min-h-screen bg-white text-black">
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            PIXO
          </h1>

          <button className="border px-4 py-2 rounded-xl">
            로그인
          </button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <input
          type="text"
          placeholder="프로필 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-2xl px-5 py-4 text-lg"
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-6">
          오늘의 추천
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProfiles.map((profile) => (
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

                <div className="flex flex-wrap gap-1 mt-3">
                  {profile.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border rounded-full px-2 py-1"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}