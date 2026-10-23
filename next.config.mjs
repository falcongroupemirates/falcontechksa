// Blog CMS images are served from Supabase Storage
const blogStorage = process.env.BLOG_SUPABASE_URL ? new URL(process.env.BLOG_SUPABASE_URL) : null;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
      ...(blogStorage
        ? [
            {
              protocol: blogStorage.protocol.replace(":", ""),
              hostname: blogStorage.hostname,
              port: blogStorage.port,
              pathname: "/storage/v1/object/public/**",
            },
          ]
        : []),
    ],
  },
  async redirects() {
    return [
      {
        // Surveying moved out of Industrial Services into its own division
        source: "/services/industrial-services/survey-scanning",
        destination: "/services/survey-scanning",
        permanent: true,
      },
      {
        // Blog articles are English-only (Blog CMS) — the Arabic site links to them.
        // Temporary (307) so an Arabic blog can be added later without cached redirects.
        source: "/ar/blog",
        destination: "/blog",
        permanent: false,
      },
      {
        source: "/ar/blog/:slug*",
        destination: "/blog/:slug*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
