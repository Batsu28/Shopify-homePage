/** @type {import('next').NextConfig} */
const nextConfig = {};
// transpilePackages: ["three"], (module.exports = nextConfig);

module.exports = {
	async rewrites() {
		return [
			{
				source: "/home",
				destination: "/",
			},
		];
	},
};
