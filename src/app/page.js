import Navbar from "../../components/main/Navbar";
import Hero from "../../components/main/Hero";
import "./globals.css";
import AboutSection from "../../components/main/AboutSection";
import ProjectSection from "../../components/main/ProjectSection";
import EmailSection from "../../components/main/EmailSection";
import Footer from "../../components/main/Footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#121212]  ">
        <Navbar />
        <div className=" container mx-auto mt-20 px-12 py-4">
          <Hero />
          <AboutSection />
          <ProjectSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
