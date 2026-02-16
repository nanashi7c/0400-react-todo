const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  assetPrefix: isProd
    ? "https://nanashi7c.github.io/0400-react-todo/"
    : undefined,
};

export default nextConfig;
