import { useProfileData } from "../context/DataContext";

export const Contact = () => {
  const { contact, contactLinks } = useProfileData();

  return (
    <div
      id="contact"
      className="px-10 sm:px-20 sm:py-10 bg-background text-copy-primary"
    >
      <hr className="my-5 border-t-2 border-gray-800" />

      <h1 className="text-xl sm:text-2xl">Contact</h1>
      <div className="bg-copy-secondary mt-10 w-[300px] sm:h-[400px] sm:w-[600px]">
        <img src={contact} alt="profilepic" />
      </div>
      <div className="flex flex-col sm:flex-row items-start space-y-2 font-semibold sm:font-normal sm:space-y-0 sm:items-center sm:space-x-10">
        {contactLinks?.map((item) => (
          <a key={item.sys.id} href={item.fields.url}>
            {item.fields.label}
          </a>
        ))}
      </div>
    </div>
  );
};
