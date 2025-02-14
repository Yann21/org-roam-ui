const fs = require('fs')

const withPlugins = require('next-compose-plugins')

const d3packages = fs.readdirSync('node_modules').filter((name) => name.startsWith('d3-'))
const withTM = require('next-transpile-modules')(d3packages)

module.exports = withPlugins([withTM], {
  distDir: 'build',
  images: {
    domains: ['localhost'],
    loader: 'custom',
  },
  typescript: {
    // Warning: This will disable TypeScript type checking during build
    ignoreBuildErrors: true,
  },
  eslint: {
  // This will allow production builds to complete even if there are ESLint errors.
  ignoreDuringBuilds: true,
  },
})
