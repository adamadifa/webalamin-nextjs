// NewsSection.tsx
import Image from "next/image";
import { useEffect, useState } from "react";
import api from "@/api/axios";
import endpoints from "@/api/endpoints";
import Link from "next/link";

interface NewsItem {
  title: string;
  category: string;
  img: string;
  slug: string;
}

const NewsSection = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    api.get(endpoints.publicPosts.getPostHomepage)
      .then(res => {
        let posts = res.data?.data;
        if (!posts) posts = [];
        if (!Array.isArray(posts)) posts = [posts];
        const mapped = posts.map((post: any) => ({
          title: post.title,
          category: post.category?.name || "-",
          img: post.image,
          slug: post.slug,
        }));
        setNews(mapped);
        setLoading(false);
      })
      .catch(err => {
        setError("Gagal memuat berita");
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Latest News</h3>
        <span className="text-teal-300 font-semibold">Memuat...</span>
      </div>
      <div className="grid grid-cols-2 gap-4 h-full">
        {/* Skeleton kiri besar */}
        <div className="row-span-2 col-span-1 rounded-2xl overflow-hidden relative bg-gray-200 animate-pulse h-56 md:h-64">
          <div className="absolute bottom-0 left-0 w-full p-4">
            <div className="h-4 w-24 bg-gray-300 rounded mb-2" />
            <div className="h-6 w-3/4 bg-gray-300 rounded" />
          </div>
        </div>
        {/* Skeleton kanan atas */}
        <div className="col-span-1 rounded-2xl overflow-hidden relative bg-gray-200 animate-pulse h-28 md:h-32">
          <div className="absolute bottom-0 left-0 w-full p-3">
            <div className="h-3 w-16 bg-gray-300 rounded mb-1" />
            <div className="h-5 w-2/3 bg-gray-300 rounded" />
          </div>
        </div>
        {/* Skeleton kanan bawah */}
        <div className="col-span-1 rounded-2xl overflow-hidden relative bg-gray-200 animate-pulse h-28 md:h-32">
          <div className="absolute bottom-0 left-0 w-full p-3">
            <div className="h-3 w-16 bg-gray-300 rounded mb-1" />
            <div className="h-5 w-2/3 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
  if (error) return <div className="py-12 text-center text-rose-600 font-semibold">{error}</div>;
  if (!news || news.length < 3) return <div className="py-12 text-center text-gray-500">Belum ada berita terbaru.</div>;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Latest News</h3>
        <Link href="/news" className="text-teal-700 font-semibold hover:underline transition">Lihat Semua Berita</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        {/* Kiri besar */}
        <Link href={`/news/${news[0].slug}`} className="row-span-2 col-span-1 rounded-2xl overflow-hidden relative group cursor-pointer">
          <Image src={news[0].img} alt={news[0].title} width={400} height={400} className="object-cover w-full h-56 md:h-64 group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <div className="absolute top-4 left-4 bg-indigo-500/80 text-white text-xs px-3 py-1 rounded shadow-md z-10">
              {news[0].category}
            </div>
            <div className="text-white text-lg md:text-xl font-semibold drop-shadow-lg mt-12 mb-2 z-10">
              {news[0].title}
            </div>
          </div>
        </Link>
        {/* Kanan atas */}
        <Link href={`/news/${news[1].slug}`} className="col-span-1 rounded-2xl overflow-hidden relative group cursor-pointer">
          <Image src={news[1].img} alt={news[1].title} width={400} height={180} className="object-cover w-full h-28 md:h-32 group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-3">
            <div className="absolute top-3 left-3 bg-teal-500/80 text-white text-xs px-3 py-1 rounded shadow-md z-10">
              {news[1].category}
            </div>
            <div className="text-white text-base font-semibold drop-shadow-lg mt-8 mb-1 z-10">
              {news[1].title}
            </div>
          </div>
        </Link>
        {/* Kanan bawah kiri */}
        <Link href={`/news/${news[2].slug}`} className="col-span-1 rounded-2xl overflow-hidden relative group cursor-pointer">
          <Image src={news[2].img} alt={news[2].title} width={400} height={180} className="object-cover w-full h-28 md:h-32 group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-3">
            <div className="absolute top-3 left-3 bg-orange-500/80 text-white text-xs px-3 py-1 rounded shadow-md z-10">
              {news[2].category}
            </div>
            <div className="text-white text-base font-semibold drop-shadow-lg mt-8 mb-1 z-10">
              {news[2].title}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewsSection;
