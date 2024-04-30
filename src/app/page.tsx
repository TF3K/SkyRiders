import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/navbar";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <main>
        <SessionProvider>
            <NavBar />
        </SessionProvider>
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
