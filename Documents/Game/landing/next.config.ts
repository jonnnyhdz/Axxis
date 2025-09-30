import type { NextConfig } from "next";
import withPWA from "next-pwa";
import runtimeCaching from "./runtimeCaching";

const config: NextConfig = {
  reactStrictMode: true,
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching,
  fallbacks: {
    document: "/offline.html", // 👈 se servirá cuando no haya conexión
  },
})(config);
