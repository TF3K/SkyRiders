import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
