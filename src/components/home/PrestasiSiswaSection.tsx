import Image from "next/image";


const prestasi = [
  {
    name: "Aisyah Putri",
    jenjang: "Madrasah Aliyah",
    img: "/assets/images/model1.png",
  },
  {
    name: "Rizky Ramadhan",
    jenjang: "Madrasah Tsanawiyah",
    img: "/assets/images/model1.png",
  },
  {
    name: "Fauzan Akbar",
    jenjang: "SDIT Al Amin",
    img: "/assets/images/model1.png",
  },
  {
    name: "Siti Nurhaliza",
    jenjang: "TK Calisa Rabbani",
    img: "/assets/images/model1.png",
  },
  {
    name: "Siti Nurhaliza",
    jenjang: "TK Calisa Rabbani",
    img: "/assets/images/model1.png",
  },
  {
    name: "Siti Nurhaliza",
    jenjang: "TK Calisa Rabbani",
    img: "/assets/images/model1.png",
  },
  {
    name: "Siti Nurhaliza",
    jenjang: "TK Calisa Rabbani",
    img: "/assets/images/model1.png",
  },
];

const PrestasiSiswaSection = () => {
  return (
    <section className="w-full rounded-2xl bg-gradient-to-br from-white via-teal-50 to-teal-200 p-6 shadow-lg overflow-x-hidden">
      <h3 className="mb-4 text-2xl font-bold text-gray-800">Prestasi Siswa</h3>
      <div className="relative h-[300px] w-full overflow-hidden">
        {/* Gradasi atas */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-10 z-10"
          style={{
            background: "linear-gradient(to bottom, #f8fafc 80%, transparent 100%)"
          }}
        />
        {/* Gradasi bawah */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 z-10"
          style={{
            background: "linear-gradient(to top, #f8fafc 80%, transparent 100%)"
          }}
        />
        <div
          className="marquee-vertical flex flex-col w-full max-w-md mx-auto"
          style={{
            animation: `marqueeUp ${prestasi.length * 2.5}s linear infinite`,
          }}
        >
          {prestasi.concat(prestasi).map((s, i) => (
            <div
              key={i}
              className="flex items-center bg-white rounded-xl shadow p-3 min-h-[60px] w-full mb-4 cursor-pointer transition hover:shadow-md"
            >
              <Image
                src={s.img}
                alt={s.name}
                width={56}
                height={56}
                className="rounded-full object-cover border-2 border-blue-200"
              />
              <div className="ml-4">
                <div className="font-semibold text-slate-800 text-base">{s.name}</div>
                <div className="text-teal-600 text-sm mt-1">{s.jenjang}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PrestasiSiswaSection;