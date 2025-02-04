import { useProfileData } from "../context/DataContext";

export const Contact = () => {
  const { contact, contactLinks } = useProfileData();

  return (
    <div className="px-10 py-10 text-copy-primary">
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
