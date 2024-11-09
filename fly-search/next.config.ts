import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      {
        pathname: 'cdn-a.flytoday.ir',
        search: '',
      },
    ],
  },
};

export default nextConfig;
