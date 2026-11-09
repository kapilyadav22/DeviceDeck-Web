import React from "react";
import Hero from "@/components/Hero";
import InteractiveStudio from "@/components/InteractiveStudio";
import MenuBarCompanion from "@/components/MenuBarCompanion";
import FeaturesGrid from "@/components/FeaturesGrid";
import FaqSection from "@/components/FaqSection";
import DownloadSection from "@/components/DownloadSection";

export default function Home() {
  return (
    <>
      <Hero />
      <InteractiveStudio />
      <MenuBarCompanion />
      <FeaturesGrid />
      <FaqSection />
      <DownloadSection />
    </>
  );
}
