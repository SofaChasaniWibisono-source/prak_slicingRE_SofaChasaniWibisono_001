import React from "react";
import ideationImg from "../assets/ideationImg.png";
import creationImg from "../assets/creationImg.png";
import collaborationImg from "../assets/collaborationImg.png";
import guidanceImg from "../assets/guidanceImg.png";

export default function PillarsSection() {
  const pillars = [
    {
      title: "Ideation",
      description:
        "Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.",
      img: ideationImg,
      color: "yellow",
    },
    {
      title: "Creation",
      description:
        "Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.",
      img: creationImg,
      color: "green",
    },
    {
      title: "Collaboration",
      description:
        "Bekerja sama dengan tim multidisiplin untuk menciptakan solusi yang komprehensif.",
      img: collaborationImg,
      color: "blue",
    },
    {
      title: "Guidance & Support",
      description:
        "Mendapatkan bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.",
      img: guidanceImg,
      color: "pink",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="text-gray-800">Empat Pilar </span>
          <span className="text-blue-500">Ruang Ekspresi</span>
        </h2>

        <p className="text-gray-600 text-center mb-10">
          Kompetensi yang dirancang untuk mengembangkan potensi <br />
          kreativitas dan kompetensi mahasiswa melalui pendekatan holistik.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-md bg-${p.color}-100 text-center`}
            >
              {/* ICON / GAMBAR */}
              <img
                src={p.img}
                alt={p.title}
                className="w-15 h-20 object-contain mx-auto mb-4"
              />

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-gray-700 text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
