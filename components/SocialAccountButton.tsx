type Props = {
  icon: React.ReactNode;
  url: string;
};

export const SocialAccountButton = ({ icon, url }: Props) => {
  return (
    <button
      onClick={() => window.open(url, "_blank")}
      className="p-2 bg-gray-800 rounded-sm hover:bg-gray-700 transition-colors hover:cursor-pointer"
    >
      {icon}
    </button>
  );
};
