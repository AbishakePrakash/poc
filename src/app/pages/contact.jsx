import { useProfileData } from "../context/DataContext";

export const Contact = () => {
  const { contact, contactLinks } = useProfileData();

  return (
    <div id="contact" className="px-20 py-10 bg-background text-copy-primary">
      <hr className="my-5 border-t-2 border-gray-800" />

      <h1 className="text-2xl">Contact</h1>
      <div className="bg-copy-secondary mt-10 h-[400px] w-[600px]">
        <img src={contact} alt="profilepic" />
      </div>
      <div className="flex items-center space-x-10">
        {contactLinks?.map((item) => (
          <a key={item.sys.id} href={item.fields.url}>
            {item.fields.label}
          </a>
        ))}
      </div>
    </div>
  );
};
