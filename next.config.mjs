/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fyxrr.com',
                port: '',
                //pathname: '/u/**',
            },
        ],
    },
    
};

export default nextConfig;