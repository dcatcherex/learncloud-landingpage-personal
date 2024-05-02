/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol:"https",
                hostname:"lh3.googleusercontent.com",
                port:"",
                pathname:"/a/**",
            }
        ]
    }
};

export default nextConfig;