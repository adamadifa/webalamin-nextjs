// ReasonSection.tsx
// Section alasan memilih layanan (inspirasi dari "Why should people choose Medkit services?")

import Image from "next/image";
import { User, Book, Globe, Activity } from "react-feather";

const reasons = [
  {
    title: "Pembentukan Karakter",
    desc:
      "Program ini fokus pada pembentukan akhlak mulia, kedisiplinan, tanggung jawab, dan etika peserta didik melalui kegiatan rutin, mentoring, dan keteladanan.",
    icon: <User size={20} className="text-teal-600" />,
  },
  {
    title: "Tahsin & Tahfizh Al Quran",
    desc:
      "Meningkatkan kemampuan membaca Al-Quran dengan tajwid yang benar (tahsin) dan membina peserta didik agar mampu menghafal Al-Quran secara terstruktur dan konsisten (tahfizh).",
    icon: <Book size={20} className="text-teal-600" />,
  },
  {
    title: "Bahasa Asing",
    desc:
      "Membekali peserta didik dengan kemampuan dasar dalam berbahasa Arab dan Inggris secara aktif, baik lisan maupun tulisan, melalui pembelajaran kontekstual dan praktik langsung.",
    icon: <Globe size={20} className="text-teal-600" />,
  },
  {
    title: "Science",
    desc:
      "Menumbuhkan rasa ingin tahu dan keterampilan sains melalui eksperimen, observasi, dan pembelajaran berbasis proyek yang mendorong peserta didik berpikir kritis dan kreatif.",
    icon: <Activity size={20} className="text-teal-600" />,
  },
];

const ReasonSection = () => {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col md:flex-row items-center gap-6 md:gap-16">
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
          <div className="relative w-56 h-56 md:w-[460px] md:h-[460px]">
            <Image
              src="/assets/images/model3.png"
              alt="Thinking girl"
              fill
              className="object-contain rounded-2xl drop-shadow-xl"
              priority
            />
            {/* Ornamen bulatan */}
            <div className="absolute -top-3 -left-3 w-6 h-6 md:w-10 md:h-10 bg-yellow-100 rounded-full z-10 animate-float-y" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-7 h-7 md:w-12 md:h-12 bg-indigo-100 rounded-full z-10 animate-float-x" />
            <div className="absolute top-1/2 -right-4 w-5 h-5 md:w-8 md:h-8 bg-teal-100 rounded-full z-10 animate-float-xy" />
          </div>
        </div>
        {/* Right: Text & List */}
        <div className="md:w-1/2">
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 leading-snug text-center md:text-left">
            Program Unggulan <span className="text-yellow-500">Pesantren</span>
          </h2>
          <div className="mt-5 md:mt-8 space-y-4 md:space-y-7">
            {reasons.map((r, i) => (
              <div key={i} className="flex items-start gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 aspect-square flex items-center justify-center rounded-full bg-teal-100 mt-1">
                  {/* Icon dikecilkan di mobile */}
                  {r.icon}
                </div>
                <div>
                  <div className="font-semibold text-base md:text-lg text-gray-900">{r.title}</div>
                  <div className="text-gray-500 text-xs md:text-sm mt-1">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonSection;
