import Link from "next/link";
import { useData } from "../context/dataContext";

export function Contact() {
  const { profile } = useData();
  const contactImage = profile[0]?.contact.fields.image.fields.file.url;
  const contactLinks = profile[0]?.contact.fields.links;
  return (
    <section id="contact" className="border-b-2 w-full h-full">
      <div className="px-5 sm:px-20 py-12 flex border-b-2 w-full" >
        <p className="typography-ps1">Contact</p>
      </div>

      {/* Profile Image & Links */}
      <div className="mt-10 flex flex-col ml-5 sm:ml-20">
        {/* Profile Image */}
        <div className="w-72 sm:w-96 h-auto bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          {contactImage && <img src={contactImage} alt="Profile" className="w-full h-full object-cover" />}
        </div>

        {/* Contact Links */}
        <div className="mt-2 mb-4 flex flex-wrap  justify-between w-72 sm:w-96">
          {contactLinks?.map((item) => (
            <Link
              key={item.sys.id}
              href={item.fields.url}
              target="_blank"
              rel="noopener noreferrer"
              className="typography-cv5 hover:underline"
            >
              {item.fields.label}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
