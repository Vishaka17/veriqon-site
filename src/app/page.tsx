import Nav from "./components/Nav";
import LandingSection from "./components/LandingSection";
import OurServices from "./components/OurServices";
import ResourcesBand from "./components/ResourcesBand";
import ContactCta from "./components/ContactCta";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <LandingSection />
        <OurServices />
        <ResourcesBand />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
