import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Ensure Next resolves the correct monorepo/workspace root even if other lockfiles exist.
  outputFileTracingRoot: __dirname
};

export default nextConfig;
