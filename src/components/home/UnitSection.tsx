const categories = [
    {
        name: "TK Calisa Rabbani",
        img: "/assets/images/logo/tk.png",
        circleBg: "bg-yellow-100",
        desc: "Learn about tech and innovation."
    },
    {
        name: "SDIT Al Amin",
        img: "/assets/images/logo/sdit.png",
        circleBg: "bg-teal-100",
        desc: "Master video creation skills."
    },
    {
        name: "Madrasah Diniyah Ula",
        img: "/assets/images/logo/mdu.png",
        circleBg: "bg-orange-100",
        desc: "Design beautiful user experiences."
    },
    {
        name: "Madrasah Tsanawiyah",
        img: "/assets/images/logo/mts.png",
        circleBg: "bg-indigo-100",
        desc: "Explore the world of fashion."
    },
    {
        name: "Madrasah Aliyah",
        img: "/assets/images/logo/ma.png",
        circleBg: "bg-pink-100",
        desc: "Broaden your knowledge base."
    },
];
const UnitSection = () => {
    return (
        <section className="bg-white pt-12 md:pt-24 pb-8 md:pb-8">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <p className="text-teal-600 font-semibold text-sm md:text-base tracking-wide md:tracking-normal mb-1 md:mb-2">JENJANG PENDIDIKAN</p>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mt-1 md:mt-2 leading-tight md:leading-snug">Program Pendidikan</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mt-8 md:mt-12">
                    {categories.map((cat) => (
                        <div
                            key={cat.name}
                            className="p-3 md:p-6 rounded-2xl bg-white text-gray-800 border border-gray-100 shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center hover:shadow-2xl hover:-translate-y-2"
                            style={{ minWidth: 0 }}
                        >
                            <div className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full mb-3 md:mb-4 ${cat.circleBg}`}>
                                <img src={cat.img} alt={cat.name} className="w-12 h-12 md:w-24 md:h-24 object-contain" />
                            </div>
                            <h4 className="mt-1 md:mt-2 font-bold text-sm md:text-base text-center">{cat.name}</h4>
                            <p className="mt-1 text-xs md:text-sm text-gray-500 text-center">{cat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default UnitSection
