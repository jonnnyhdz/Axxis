// src/fonts.ts
import { Press_Start_2P, Cinzel_Decorative, Share_Tech_Mono } from "next/font/google";

export const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const medievalFont = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const bodyFont = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});
