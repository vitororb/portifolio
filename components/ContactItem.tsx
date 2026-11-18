type Props = {
  icon: React.ReactNode;
  title: string;
  contactInfo: string;
};

export const ContactItem = ({ icon, title, contactInfo }: Props) => {
  return (
    <div className="flex gap-4 items-center">
      {icon}
      <div className="flex flex-col gap-1">
        <span className="font-medium">{title}</span>
        <span>{contactInfo}</span>
      </div>
    </div>
  );
};
