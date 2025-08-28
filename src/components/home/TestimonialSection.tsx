import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from './testimonial-section.module.css';

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

  // --- MOBILE ---
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileAnim, setMobileAnim] = useState<'left' | 'right' | null>(null);
  const handlePrev = () => {
    setMobileAnim('right');
    setTimeout(() => {
      setMobileIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setMobileAnim(null);
    }, 250);
  };
  const handleNext = () => {
    setMobileAnim('left');
    setTimeout(() => {
      setMobileIndex((prev) => (prev + 1) % testimonials.length);
      setMobileAnim(null);
    }, 250);
  };

  // Auto-slide for MOBILE
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileAnim('left');
      setTimeout(() => {
        setMobileIndex((prev) => (prev + 1) % testimonials.length);
        setMobileAnim(null);
      }, 250);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="container mx-auto px-3 sm:px-6 lg:px-12">
        {/* Title & Desc */}
        <div className="mb-6 md:mb-10 block md:hidden">
          <h2 className="text-2xl font-extrabold text-gray-900 leading-tight mb-2">Apa Kata Orangtua</h2>
          <p className="text-gray-500 mb-4 max-w-md text-sm">
            Testimoni para orangtua tentang pengalaman dan kepuasan mereka menyekolahkan anak di Pesantren Persatuan Islam 80 Al Amin.
          </p>
          <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-orange-400 text-white font-semibold shadow-md hover:opacity-90 transition text-sm">View More</button>
        </div>
        {/* MOBILE: Card Satu per Satu */}
        <div className="block md:hidden w-full">
          <div className="flex flex-col items-center">
            <div className={`w-full bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-6 mb-4 relative transition-transform duration-300 ease-in-out
              ${mobileAnim === 'left' ? styles.animateSlideLeft : ''} ${mobileAnim === 'right' ? styles.animateSlideRight : ''}
            `}>
              <div className="flex items-center mb-3">
                <Image src={testimonials[mobileIndex].img} alt={testimonials[mobileIndex].name} width={48} height={48} className="rounded-full object-cover border-2 border-purple-200 mr-4 w-12 h-12" />
                <div>
                  <div className="font-bold text-base text-gray-900 mb-1 flex items-center">{testimonials[mobileIndex].name}
                    <span className="ml-2 text-purple-500 text-lg">&#10077;</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} xmlns="http://www.w3.org/2000/svg" fill="#fbbf24" viewBox="0 0 20 20" className="w-4 h-4">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-gray-500 text-sm leading-normal font-medium mb-2">{testimonials[mobileIndex].text}</div>
              <div className="flex justify-between mt-2">
                <button onClick={handlePrev} className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold shadow transition">Sebelumnya</button>
                <button onClick={handleNext} className="px-3 py-1 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 text-sm font-semibold shadow transition">Selanjutnya</button>
              </div>
            </div>
            <div className="flex gap-1 justify-center mt-1">
              {testimonials.map((_, idx) => (
                <span key={idx} className={`w-2 h-2 rounded-full ${idx === mobileIndex ? "bg-purple-500" : "bg-gray-300"} inline-block`}></span>
              ))}
            </div>
          </div>
        </div>
        {/* DESKTOP: Slider Lama */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 md:items-center">
          {/* Left: Title & Desc */}
          <div className="mb-0">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">Apa Kata Orangtua</h2>
            <p className="text-gray-500 mb-8 max-w-md text-base">
              Testimoni para orangtua tentang pengalaman dan kepuasan mereka menyekolahkan anak di Pesantren Persatuan Islam 80 Al Amin.
            </p>
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-orange-400 text-white font-semibold shadow-md hover:opacity-90 transition text-base">View More</button>
          </div>
          {/* Right: Testimonials Slider lama */}
          <div className="relative">
            <div className="relative h-[340px] overflow-visible">
              <div className="flex flex-col transition-transform duration-700 ease-in-out">
                {getVisibleTestimonials().map((t, i) => {
                  const centerIndex = (currentSlide + CENTER_INDEX) % testimonials.length;
                  const thisIndex = (currentSlide + i) % testimonials.length;
                  let animClass = "";
                  if (animatingIndex === thisIndex && animType === "in" && i === CENTER_INDEX) {
                    animClass = styles.testimonialZoomIn;
                  } else if (animatingIndex === thisIndex && animType === "out" && i !== CENTER_INDEX) {
                    animClass = styles.testimonialZoomOut;
                  }
                  return (
                    <div
                      key={i}
                      className={`relative flex items-center bg-white rounded-2xl shadow-md border border-gray-100 px-6 py-5 transition-all duration-300 h-[110px] mb-2 ${i === CENTER_INDEX
                        ? "ring-2 ring-purple-400 bg-gradient-to-r from-purple-50/80 to-orange-50/60 scale-105 z-10"
                        : "opacity-80 z-0"
                        } ${animClass}`}
                      style={{
                        transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.6s cubic-bezier(0.4,0,0.2,1)",
                      }}
                    >
                      {i === CENTER_INDEX && (
                        <span className="absolute left-0 top-4 bottom-4 w-1.5 rounded-full bg-gradient-to-b from-purple-500 to-orange-400" />
                      )}
                      <Image
                        src={t.img}
                        alt={t.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover border-2 border-purple-200 mr-4 w-14 h-14"
                      />
                      <div className="flex-1">
                        <div className={`font-bold text-gray-900 text-base mb-0 flex items-center mt-2`}>
                          {t.name}
                          {i === CENTER_INDEX && (
                            <span className="ml-2 text-purple-500 text-xl">&#10077;</span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 mb-0">
                          {[...Array(5)].map((_, idx) => (
                            <svg key={idx} xmlns="http://www.w3.org/2000/svg" fill="#fbbf24" viewBox="0 0 20 20" className="w-5 h-5">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                            </svg>
                          ))}
                        </div>
                        <div className={`text-gray-500 text-sm leading-snug ${i === CENTER_INDEX ? "font-medium" : ""} line-clamp-3 overflow-hidden pb-3`}>{t.text}</div>
                      </div>
                      {i !== CENTER_INDEX && (
                        <span className="ml-2 text-gray-300 text-2xl">&#10077;</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default TestimonialSection;