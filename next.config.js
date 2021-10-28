const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
	basePath: '',
	images: {
		domains: ['tailwindui.com', 'images.unsplash.com']
	},
	poweredByHeader: false,
	reactStrictMode: true,

	trailingSlash: true
})
