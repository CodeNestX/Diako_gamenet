import Hero from "../components/Hero";
import Features from "../components/Features";
import PopularGames from "../components/PopularGames";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <PopularGames />
      <Pricing />
    </main>
  );
}