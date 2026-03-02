import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure Next resolves the correct monorepo/workspace root even if other lockfiles exist.
  outputFileTracingRoot: __dirname
};

export default nextConfig;
