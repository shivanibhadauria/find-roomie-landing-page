import { AppPreview } from "./components/app-preview";
import { Cta } from "./components/cta";
import { Faq } from "./components/faq";
import { FindTogether } from "./components/find-together";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { HowItWorks } from "./components/how-it-works";
import { Modes } from "./components/modes";
import { Nav } from "./components/nav";
import { Trust } from "./components/trust";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AppPreview />
        <HowItWorks />
        <Modes />
        <FindTogether />
        <Trust />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
