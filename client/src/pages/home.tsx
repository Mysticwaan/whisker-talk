import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Technical } from "@/components/sections/technical";
import { Development } from "@/components/sections/development";
import { Future } from "@/components/sections/future";
import { InteractiveDemo } from "@/components/sections/interactive-demo";
import { Infographics } from "@/components/sections/infographics";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 space-y-24">
        <Hero />
        <Features />
        <InteractiveDemo />
        <Infographics />
        <Technical />
        <Development />
        <Future />
      </main>
    </div>
  );
}