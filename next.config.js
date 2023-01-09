/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.unsplash.com','kito-profile-d5wi.vercel.app','aer.co.id','res.cloudinary.com','picbucket.sgp1.digitaloceanspaces.com','hokito.sgp1.digitaloceanspaces.com']
  }
}

module.exports = nextConfig
