import ContactUs from "../components/ContactUs";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Navbar from "../components/Navbar";

export default function Contact() {
	return (
		<div className="bg-bg relative">
			<Navbar />
			<Hero2  />
      <ContactUs />
      <FAQ />
			<Footer />
		</div>
	);
}
