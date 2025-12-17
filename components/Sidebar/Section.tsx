type Props = {
  sectionTilte: string;
  children?: React.ReactNode;
};

export const Section = ({ sectionTilte, children }: Props) => {
  return (
    <div className="flex items-center flex-col gap-2">
      <h2>{sectionTilte}</h2>
      {children}
    </div>
  );
};
