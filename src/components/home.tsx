import Header from "@/components/gym/Header";
import Hero from "@/components/gym/Hero";
import Features from "@/components/gym/Features";
import Membership from "@/components/gym/Membership";
import Gallery from "@/components/gym/Gallery";
import Location from "@/components/gym/Location";
import FinalCTA from "@/components/gym/FinalCTA";
import Footer from "@/components/gym/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Header />
      <main>
        <Hero />
        <Features />
        <Membership />
        <Gallery />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
