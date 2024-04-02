"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Section1 from "@/components/HomePage/Section1";
import Section3 from "@/components/HomePage/Section3";
import Section4 from "@/components/HomePage/Section4";
import Section6 from "@/components/HomePage/Section6";
import Section7 from "@/components/HomePage/Section7";

export default function Home() {
  const phoneNumber = "+14807267009";
  const call = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const message = () => {
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <main className="bg-bodybg">
      <Header call={call} message={message} />
      <Navbar call={call} message={message} />
      <Section1 />
      <Section3 />
       <Section4 />
      <Section7 />
      <Section6 />
      <Footer />
    </main>
  );
}
