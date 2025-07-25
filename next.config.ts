import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "siprenpas.my.id",
        port: "",
        pathname: "/**",
      },
      // Tambahkan domain lain di sini jika perlu
    ],
  },

  eslint: {
    ignoreDuringBuilds: true, // ✅ ini akan nonaktifkan error eslint saat build
  },
};

export default nextConfig;
