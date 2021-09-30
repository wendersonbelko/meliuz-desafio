/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  rewrites() {
    return [{
      source: '/:path*',
      destination: '/:path*'
    },{
      source: '/:path*',
      destination: 'http://localhost:4000/:path*'
    }]
  }
}
