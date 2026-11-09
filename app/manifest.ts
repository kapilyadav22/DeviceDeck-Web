import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Device Deck — Native Mac Setup Controller",
    short_name: "Device Deck",
    description:
      "Native macOS external display DDC/CI brightness, audio routing, and dock automation companion.",
    start_url: "/",
    display: "standalone",
    background_color: "#090a0f",
    theme_color: "#090a0f",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

