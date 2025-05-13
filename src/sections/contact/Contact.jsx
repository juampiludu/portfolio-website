import TitleHeader from "../../components/TitleHeader";
import ContactExperience from "../../Models/contact/ContactExperience";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get In Touch - Let's Connect"
          sub="💬 Have questions or Ideas? Let's talk! 🚀"
        />

        <div className="grid-12-cols mt-16">
          <ContactForm />

          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
