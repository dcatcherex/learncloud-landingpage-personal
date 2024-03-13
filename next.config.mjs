/** @type {import('next').NextConfig} */
const nextConfig = {
    // ref: https://nextjs.org/docs/app/api-reference/next-config-js/distDir
    // distDir: "dist",
    output: "standalone",
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
