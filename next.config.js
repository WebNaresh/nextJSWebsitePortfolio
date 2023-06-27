/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  env: {
    MONGO: "mongodb+srv://naresh:naresh@cluster0.sojj8.mongodb.net/nextJs",
    GOOGLE_CLIENT_ID:
      "94683515394-t8l5c7llgkd92u9ch8kdvn5qnlq0h3c7.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    NEXTAUTH_SECRET: "fsdfsdfcsd",
    NEXTAUTH_URL: "http://localhost:3000",
    FACEBOOK_CLIENT_ID: "232620086244555",
    FACEBOOK_CLIENT_SECRET: "681ca4ab92fd083078edce2ff9d39a6f",
  },
};

module.exports = nextConfig;
