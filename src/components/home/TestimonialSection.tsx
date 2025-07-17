import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Mehwish",
    img: "/assets/images/model3.png",
    text: "Compliment interested discretion estimating on stimulated apartments oh.",
    highlight: false,
  },
  {
    name: "Elizabeth Jeff",
    img: "/assets/images/model2.png",
    text: "Dear so sing when in find read of call. As distrusts behaviour abilities defective is.",
    highlight: true,
  },
  {
    name: "Emily Thomas",
    img: "/assets/images/model1.png",
    text: "Never at water me might. On formed merits hunted unable merely by mr whence or.",
    highlight: false,
  },
  {
    name: "Sarah Johnson",
    img: "/assets/images/model3.png",
    text: "Amazing experience with this platform. The quality of education and support exceeded my expectations completely.",
    highlight: false,
  },
  {
    name: "Michael Chen",
    img: "/assets/images/model2.png",
    text: "The best decision I made for my child's education. Professional staff and excellent facilities.",
    highlight: false,
  },
];

const VISIBLE_COUNT = 3;
const CENTER_INDEX = 1; // index tengah dari 3 testimonial

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const animTimeout = useRef<NodeJS.Timeout | null>(null);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);
  const [animType, setAnimType] = useState<"in" | "out" | null>(null);

  // Auto-slide every 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Detect animating index for zoom in/out
  useEffect(() => {
    if (prevSlide !== currentSlide) {
      // Index yang akan masuk ke tengah
      const newCenter = (currentSlide + CENTER_INDEX) % testimonials.length;
      setAnimatingIndex(newCenter);
      setAnimType("in");
      if (animTimeout.current) clearTimeout(animTimeout.current);
      animTimeout.current = setTimeout(() => {
        setAnimatingIndex(null);
        setAnimType(null);
      }, 600); // durasi animasi
    }
    // eslint-disable-next-line
  }, [currentSlide]);

  // Calculate the visible testimonials (looping)
  const getVisibleTestimonials = () => {
    const visible: typeof testimonials = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      visible.push(testimonials[(currentSlide + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="container mx-auto px-3 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* Left: Title & Desc */}
        <div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3 md:mb-4">Apa Kata Orangtua</h2>
          <p className="text-gray-500 mb-5 md:mb-8 max-w-md text-sm md:text-base">
            Testimoni para orangtua tentang pengalaman dan kepuasan mereka menyekolahkan anak di Pesantren Persatuan Islam 80 Al Amin.
          </p>
          <button className="px-6 md:px-8 py-2.5 md:py-3 rounded-lg bg-gradient-to-r from-purple-500 to-orange-400 text-white font-semibold shadow-md hover:opacity-90 transition text-sm md:text-base">View More</button>
        </div>
        {/* Right: Testimonials Slider */}
        <div className="relative">
          {/* Slider Container */}
          <div className="relative h-[270px] md:h-[340px] overflow-visible">
            <div
              className="flex flex-col transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateY(0px)`
              }}
            >
              {getVisibleTestimonials().map((t, i) => {
                // Index testimonial di tengah
                const centerIndex = (currentSlide + CENTER_INDEX) % testimonials.length;
                const thisIndex = (currentSlide + i) % testimonials.length;
                let animClass = "";
                if (animatingIndex === thisIndex && animType === "in" && i === CENTER_INDEX) {
                  animClass = "testimonial-zoom-in";
                } else if (animatingIndex === thisIndex && animType === "out" && i !== CENTER_INDEX) {
                  animClass = "testimonial-zoom-out";
                }
                return (
                  <div
                    key={i}
                    className={`relative flex items-center bg-white rounded-2xl shadow-md border border-gray-100 px-4 md:px-6 py-4 md:py-5 transition-all duration-300 h-[80px] md:h-[110px] mb-2 ${i === CENTER_INDEX
                      ? "ring-2 ring-purple-400 bg-gradient-to-r from-purple-50/80 to-orange-50/60 scale-105 z-10"
                      : "opacity-80 z-0"
                      } ${animClass}`}
                    style={{
                      transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.6s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    {/* Left vertical highlight bar for active */}
                    {i === CENTER_INDEX && (
                      <span className="absolute left-0 top-3 md:top-4 bottom-3 md:bottom-4 w-1.5 rounded-full bg-gradient-to-b from-purple-500 to-orange-400" />
                    )}
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover border-2 border-purple-200 mr-3 md:mr-4 w-10 h-10 md:w-14 md:h-14"
                    />
                    <div className="flex-1">
                      <div className={`font-bold text-gray-900 text-xs md:text-base mb-0 flex items-center mt-1 md:mt-2`}>
                        {t.name}
                        {i === CENTER_INDEX && (
                          <span className="ml-2 text-purple-500 text-lg md:text-xl">&#10077;</span>
                        )}
                      </div>
                      {/* Rating bintang 5 */}
                      <div className="flex items-center gap-1 mb-0">
                        {[...Array(5)].map((_, idx) => (
                          <svg key={idx} xmlns="http://www.w3.org/2000/svg" fill="#fbbf24" viewBox="0 0 20 20" className="w-3.5 h-3.5 md:w-5 md:h-5">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                          </svg>
                        ))}
                      </div>
                      <div className={`text-gray-500 text-xs md:text-sm leading-snug ${i === CENTER_INDEX ? "font-medium" : ""} line-clamp-2 md:line-clamp-3 overflow-hidden pb-2 md:pb-3`}>{t.text}</div>
                    </div>
                    {i !== CENTER_INDEX && (
                      <span className="ml-2 text-gray-300 text-lg md:text-2xl">&#10077;</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Animasi CSS untuk zoom in/out */}
          <style jsx>{`
            .testimonial-zoom-in {
              animation: testimonialZoomIn 0.6s cubic-bezier(0.4,0,0.2,1);
            }
            .testimonial-zoom-out {
              animation: testimonialZoomOut 0.6s cubic-bezier(0.4,0,0.2,1);
            }
            @keyframes testimonialZoomIn {
              0% {
                transform: scale(0.85);
                opacity: 0.5;
              }
              60% {
                transform: scale(1.12);
                opacity: 1;
              }
              100% {
                transform: scale(1.05);
                opacity: 1;
              }
            }
            @keyframes testimonialZoomOut {
              0% {
                transform: scale(1.05);
                opacity: 1;
              }
              100% {
                transform: scale(0.85);
                opacity: 0.5;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
