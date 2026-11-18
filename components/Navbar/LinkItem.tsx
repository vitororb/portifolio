type Props = {
  text: string;
  url: string;
};

export const LinkItem = ({ text, url }: Props) => {
  return (
    <a
      href={url}
      className="hover:cursor-pointer hover:text-green-800 text-neutral-900"
    >
      {text}
    </a>
  );
};
