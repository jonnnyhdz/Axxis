declare module "next-pwa" {
  import type { NextConfig } from "next";
  type PWAConfig = {
    dest: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    runtimeCaching?: any;
    fallbacks?: {
      document?: string;
    };
  };
  export default function withPWA(config: PWAConfig): (nextConfig: NextConfig) => NextConfig;
}
