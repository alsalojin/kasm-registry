/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Salojin Workspace',
    description: 'My list of Kasm workspaces.',
    icon: 'https://github.com/alsalojin/kasm-registry/blob/1.0/site/public/nextcloud.png',
    listUrl: 'https://alsalojin.github.io/kasm-registry/',
    contactUrl: 'https://github.com/alsalojin/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
